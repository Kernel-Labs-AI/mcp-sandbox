# MCP Sandbox

<p align='center'><b>Run Model Context Protocol (MCP) servers in E2B's sandbox environment</b></p>

<p align='center'><b>🏆 <a href="https://www.linkedin.com/feed/update/urn:li:activity:7310193814466408448">Winner of the E2B Agents and AI Tools Hackathon</a></b></p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/%40netglade%2Fmcp-sandbox)](https://www.npmjs.com/package/@netglade/mcp-sandbox)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[🎮 Live Demo](https://netglade.github.io/mcp-chat/) | [📦 Demo Repository](https://github.com/netglade/mcp-chat) | [📝 Blog Post](https://www.netglade.cz/en/blog/bringing-mcps-to-the-cloud-how-we-won-the-e2b-hackathon)

</div>

## Overview

MCP Sandbox enables you to run Model Context Protocol (MCP) servers directly in the browser using [E2B's sandbox environment](https://e2b.dev). This package makes it easy to integrate AI assistants with tools and data sources without requiring any local setup.


## Installation

```bash
npm install @netglade/mcp-sandbox
```

## Quick Start

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

1. **MCP Server Execution**: Uses [supergateway](https://github.com/supercorp-ai/supergateway) to run stdio-based MCP servers over SSE (Server-Sent Events)
2. **Sandbox Environment**: Runs in [E2B](https://e2b.dev)'s secure sandbox environment, providing isolated execution
3. **Tool Integration**: Seamlessly connects AI assistants with real-world tools and data sources
4. **Browser Support**: Everything runs directly in the browser without local dependencies

## Examples and Resources

- 🎮 [Live Demo](https://netglade.github.io/mcp-chat/) - Try it directly in your browser
- 📦 [Demo Repository](https://github.com/netglade/mcp-chat) - Full example implementation
- 📝 [Blog Post](https://www.netglade.cz/en/blog/bringing-mcps-to-the-cloud-how-we-won-the-e2b-hackathon) - Learn about the project's journey

## Contributing

We welcome contributions! Feel free to open issues and pull requests.

## License

[MIT](LICENSE)
