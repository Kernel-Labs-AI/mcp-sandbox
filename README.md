# Forked from the awesome [hackathon project of Netglade](http://github.com/netglade/mcp-sandbox/)

# MCP Sandbox

<p align='center'><b>Run Model Context Protocol (MCP) servers in E2B's sandbox environment</b></p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/%40netglade%2Fmcp-sandbox)](https://www.npmjs.com/package/@netglade/mcp-sandbox)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


```bash
npm install @kernel-labs/mcp-sandbox
```

## Quick Start

```javascript
import { startMcpSandbox } from '@kernel-labs/mcp-sandbox';

// Start the MCP sandbox
const mcpSandbox = await startMcpSandbox({
  command: 'npx -y @modelcontextprotocol/server-brave-search',
  apiKey: 'e2b_****',
  templateName: 'your-template' // Optional
});

// Get the MCP server URL to connect your AI assistant
const mcpUrl = mcpSandbox.getUrl();
console.log("MCP server URL:", mcpUrl);
```

## How It Works

1. **MCP Server Execution**: Uses [supergateway](https://github.com/supercorp-ai/supergateway) to run stdio-based MCP servers over SSE (Server-Sent Events)
2. **Sandbox Environment**: Runs in [E2B](https://e2b.dev)'s secure sandbox environment, providing isolated execution
3. **Tool Integration**: Seamlessly connects AI assistants with real-world tools and data sources
4. **Browser Support**: Everything runs directly in the browser without local dependencies

## Contributing

Do not open PRs before having discussed issue in GH. Saves everyone time!

## License

[MIT](LICENSE)
