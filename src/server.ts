// import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"

// import dist = require("@modelcontextprotocol/server");
// import { McpServer, StdioServerTransport } from '@modelcontextprotocol/server';
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod"

const server = new McpServer({
    name: 'test',
    version: '1.0.0'
})

server.tool('create-user',
    "create a new user in database",
    {
        name: z.string(),
        email: z.string()
    },
    async (param)=>{
        try {
            return {
                content: [
                    {type:"text", text: "created user successfully"}
                ]
            }
            
        } catch (error) {
            return {content: [
                {type:"text", text: "failed to create user"}
            ]
        }}
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