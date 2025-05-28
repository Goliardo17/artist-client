import { experimental_createMCPClient } from "ai"

export class MCPService {
  static async getNodes() {
    const createMcpClient = async () => {
      const client = await experimental_createMCPClient({
        transport: {
          type: "sse",
          url: `http://localhost:3001/sse`,
        },
      });
      return client.tools();
    };

    const tools = await createMcpClient();

    console.log(JSON.stringify(tools, null, 2))
  }
} 
