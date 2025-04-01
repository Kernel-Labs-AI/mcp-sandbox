import Sandbox from "@e2b/code-interpreter";

export class SandboxedMCP {
  private sandbox: Sandbox | null = null;

  async start(command: string, envs: Record<string, string> = {}): Promise<string> {
    console.log("Creating sandbox...");
    this.sandbox = await Sandbox.create("node", {
      timeoutMs: 1000 * 60 * 10,
    });

    const host = this.sandbox.getHost(3000);
    const url = `https://${host}`;
    console.log("Server started at:", url);

    console.log("Starting server...");
    await this.sandbox.commands.run(
      `npx -y supergateway --base-url ${url} --port 3000 --stdio "${command}"`,
      {
        envs: envs,
        background: true,
        onStdout: (data) => {
          console.log(data);
        },
        onStderr: (data) => {
          console.log(data);
        }
      }
    );

    return url;
  }

  async stop() {
    if (this.sandbox) {
      await this.sandbox.kill();
      
    }
  }
}

