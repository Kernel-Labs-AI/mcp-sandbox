# mcp-sandbox

<p align='center'><b>Run Model Context Protocol (MCP) servers in E2B's sandbox environment</b></p>

<p align='center'><b>🏆 <a href="https://www.linkedin.com/feed/update/urn:li:activity:7310193814466408448">Winner of the E2B Agents and AI Tools Hackathon</a></b></p>

<br/>

[![npm version](https://img.shields.io/npm/v/%40netglade%2Fmcp-sandbox)](https://www.npmjs.com/package/@netglade/mcp-sandbox)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install @netglade/mcp-sandbox
```

## Example

```javascript
import { startMcpSandbox } from '@netglade/mcp-sandbox';

// Start the MCP sandbox
const mcpSandbox = await startMcpSandbox({
  command: 'npx -y @modelcontextprotocol/server-brave-search',
  apiKey: 'e2b_****',
});

// Get the MCP server URL to connect your AI assistant
const mcpUrl = mcpSandbox.getUrl();
console.log("MCP server URL:", mcpUrl);
```

## How It Works

1. Uses [supergateway](https://github.com/supercorp-ai/supergateway) to run stdio-based MCP servers over SSE (Server-Sent Events)
2. Runs it in an E2B sandbox environment

## License

[MIT](LICENSE)
