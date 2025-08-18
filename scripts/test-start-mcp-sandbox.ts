#!/usr/bin/env node
import 'dotenv/config'
import { startMcpSandbox } from '../src/mcpSandbox.ts'

function usage() {
  console.log(
    'Usage: npm run sandbox:run -- "<mcp server command>"\n' +
      'Env: E2B_API_KEY=... [E2B_TEMPLATE=base] [E2B_TIMEOUT_MS=600000]'
  )
}

const apiKey = process.env.E2B_API_KEY
if (!apiKey) {
  console.error('Missing E2B_API_KEY env var')
  usage()
  process.exit(1)
}

const templateName = process.env.E2B_TEMPLATE || 'bunx-prod'
const timeoutMs = Number(process.env.E2B_TIMEOUT_MS || 1000 * 60 * 10)

const dashdashIndex = process.argv.indexOf('--')
const argvCmd = dashdashIndex >= 0 ? process.argv.slice(dashdashIndex + 1) : process.argv.slice(2)
const command = argvCmd.join(' ').trim() || 'npx -y @modelcontextprotocol/server-filesystem /'

console.log(`[sandbox] template=${templateName}, timeoutMs=${timeoutMs}`)
console.log(`[sandbox] starting MCP: ${command}`)

const mcp = await startMcpSandbox({
  command,
  apiKey,
  timeoutMs,
  templateName,
})

const url = mcp.getUrl()
console.log(`[sandbox] MCP SSE URL: ${url}`)
console.log('[sandbox] running. Press Ctrl+C to stop.')

;['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach((sig) =>
  process.on(sig, () => {
    process.exit(0)
  }),
)

setInterval(() => {}, 1 << 30)


