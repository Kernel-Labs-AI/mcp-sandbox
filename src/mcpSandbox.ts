import Sandbox from "@e2b/code-interpreter";

export const startMcpSandbox = async ({
  command,
  apiKey,
  envs = {},
  timeoutMs = 1000 * 60 * 10,
}: {
  command: string
  apiKey: string
  envs?: Record<string, string>
  timeoutMs?: number
}) => {
  console.log("Creating sandbox...");
  const sandbox = await Sandbox.create("base", {
    timeoutMs,
    apiKey,
  });

  const host = sandbox.getHost(3000);
  const url = `https://${host}`;

  console.log("Starting mcp server...");
  await sandbox.commands.run(
      `npx -y supergateway --base-url ${url} --port 3000 --stdio "${command}"`,
      {
        envs,
        background: true,
        onStdout: (data: string) => {
          console.log(data);
        },
        onStderr: (data: string) => {
          console.log(data);
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
