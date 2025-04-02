import Sandbox from "@e2b/code-interpreter";

export const startMcpSandbox = async ({
  apiKey,
  timeout = 1000 * 60 * 10,
  mcpCommand,
  envs = {},
}: {
  apiKey: string
  timeout: number
  mcpCommand: string
  envs: Record<string, string>
}) => {
  console.log("Creating sandbox...");
  const sandbox = await Sandbox.create("node", {
    timeoutMs: timeout,
    apiKey: apiKey,
  });

  const host = sandbox.getHost(3000);
  const url = `https://${host}`;

  console.log("Starting mcp server...");
  await sandbox.commands.run(
      `npx -y supergateway --base-url ${url} --port 3000 --stdio npx -y "${mcpCommand}"`,
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
