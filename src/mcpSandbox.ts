import { Sandbox } from "@e2b/code-interpreter";

export const startMcpSandbox = async ({
  command,
  apiKey,
  envs = {},
  timeoutMs = 1000 * 60 * 10,
  templateName = "base",
}: {
  command: string
  apiKey: string
  envs?: Record<string, string>
  timeoutMs?: number
  templateName?: string
}) => {
  const sandbox = await Sandbox.create(templateName, {
    timeoutMs,
    apiKey,
  });

  const host = sandbox.getHost(3000);
  const url = `https://${host}`;

  console.log("Starting mcp server...");
  const startedAt = Date.now();
  await sandbox.commands.run(
      `e2b-stdio-sse --base-url ${url} --port 3000 --cors --stdio "${command}"`,
      {
        envs,
        background: true,
        onStdout: (data: string) => {
          const delta = Date.now() - startedAt;
          process.stdout.write(`[+${delta}ms] ` + data);
        },
        onStderr: (data: string) => {
          const delta = Date.now() - startedAt;
          process.stderr.write(`[+${delta}ms] ` + data);
        }
      }
  );

  console.log("MCP server started at:", url + "/sse");
  return new McpSandbox(sandbox);
}

class McpSandbox {
  public sandbox: Sandbox;

  constructor(sandbox: Sandbox) {
    this.sandbox = sandbox;
  }

  getUrl(): string {
    if (!this.sandbox) {
      throw new Error("Sandbox not initialized");
    }
    const host = this.sandbox.getHost(3000);
    return `https://${host}/sse`;
  }
}

export type { McpSandbox };
