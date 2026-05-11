// import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"

// import dist = require("@modelcontextprotocol/server");
// import { McpServer, StdioServerTransport } from '@modelcontextprotocol/server';
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
    name: 'test',
    version: '1.0.0'
})

async function main() {
    try {
        const transport = new StdioServerTransport()
        await server.connect(transport)
    } catch (error) {
        console.log(error)   
    }
}

main()