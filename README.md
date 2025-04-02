# mcp-sandbox

<p align='center'><b>Run Model Context Protocol (MCP) in a browser-based sandbox environment</b></p>

<p align='center'>Connect AI assistants to your services directly from web applications without local installation</p>

<br/>

[![npm version](https://img.shields.io/npm/v/mcp-sandbox.svg)](https://www.npmjs.com/package/mcp-sandbox)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

MCP Sandbox enables you to run Model Context Protocol (MCP) in a hosted sandbox environment powered by [E2B](https://e2b.dev). This allows you to connect AI assistants to your services directly from web applications without requiring local installations or complex setups.

MCP lets AI models interact with external tools and services (like databases, APIs, or GitHub issues) through a standardized protocol, enabling more powerful and contextual AI capabilities.

**🏆 Winner of the E2B Agents and AI Tools Hackathon**

## Installation

```bash
npm install @netglade/mcp-sandbox
```

## Quick Start

```javascript
import { startMcpSandbox } from '@netglade/mcp-sandbox';

// Initialize the MCP sandbox
const mcpSandbox = await startMcpSandbox({
  mcpCommand: 'your-mcp-command',
  apiKey: 'your-e2b-api-key',
});

// Get the MCP server URL to connect your AI assistant
const mcpUrl = mcpSandbox.getUrl();
console.log("MCP server URL:", mcpUrl);
```

## Example Integration

```javascript
import { startMcpSandbox } from '@netglade/mcp-sandbox';

// Start the MCP sandbox
const mcpSandbox = await startMcpSandbox({
  mcpCommand: 'github-mcp',
  apiKey: process.env.E2B_API_KEY,
  envs: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  }
});

// In your AI chat application
function setupAIAssistant() {
  const mcpUrl = mcpSandbox.getUrl();
  
  // Pass MCP URL to your AI model (Claude, GPT, etc.)
  // Example instruction: "Use the MCP at {mcpUrl} to access GitHub data"
  initializeAIChat({
    tools: [{
      name: "github-mcp",
      url: mcpUrl
    }]
  });
}
```

## Background

Currently, Model Context Protocol (MCP) typically works only in local environments like Claude Desktop or Cursor. MCP Sandbox bridges this gap by providing a hosted solution that can be integrated with web-based AI chat interfaces.

Our solution runs MCP in an E2B sandbox and exposes it through a web endpoint, eliminating the need for users to install or configure anything locally.

## License

[MIT](LICENSE)

## Acknowledgments

- [E2B](https://e2b.dev) for providing the sandbox environment
