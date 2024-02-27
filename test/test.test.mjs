import { describe, it, after, before } from "node:test"
import { createServer } from "node:http"

describe("Server Tests", async () => {
  let httpServer = createServer()
  before(async () => {
    httpServer = (await import("../src/server.mjs")).httpServer
    await new Promise(resolve => httpServer.once("listening", resolve));
	});
	after((_, done) => httpServer.close(done));

	it("Open conection with server", (_, done) => {
    // if(!WebSocket) throw Error("WebSocket is not defined")
		const client = new WebSocket(`ws://localhost:${PORT}`)
		// client.onopen = (event) => console.info(`CLIENT: WebSocket is connected!`, event);
		// client.onclose = (event) => {
		// 	console.log(`CLIENT: disconnected!`, event);
		// };
		// client.onmessage = (event) => {
		// 	console.log(`CLIENT: I got a message!`, event.data);
		// };
		// client.onerror = (error) => {
		// 	console.error(`CLIENT: Web Socket error! msg:`, error);
		// 	client.close();
		// };
	});
})