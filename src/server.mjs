import { createHash } from "crypto";
import { createServer } from "node:http";
import { PORT, WEB_SOCKET_MAGIC_STRING } from "./config/constants.mjs";

const httpServer = createServer((request, response) => {
	response.writeHead(200);
	response.end("hey there");
});
httpServer.on("connection", (socket) => {
	socket.on("error", (error) => console.log(`SERVER: Error!!!`, error));

	socket.on("close", () => console.log("SERVER: close"));
});
httpServer.on("upgrade", (request, socket, head) => {
	const { "sec-websocket-key": webClientSocketKey } = request.headers;
	const headers = prepareHandShakeHeaders(webClientSocketKey);
	console.log(headers)
	socket.write(headers);
});
httpServer.listen(PORT, () => console.info(`SERVER: running at port ${PORT}`));

/** 
 * @param {string} id
 */
const prepareHandShakeHeaders = (id) => {
	const acceptKey = createSocketAccept(id);
	const headers = [
		`HTTP/1.1 101 Switching Protocols`,
		`Upgrade: websocket`,
		`Connection: Upgrade`,
		`Sec-WebSocket-Accept: ${acceptKey}`,
		``,
	]
		.map((line) => line.concat("\r\n"))
		.join("");
	return headers;
};
/** 
 * @param {string} id
 */
const createSocketAccept = (id) => {
	const shaum = createHash("sha1");
	shaum.update(id + WEB_SOCKET_MAGIC_STRING);
	return shaum.digest("base64");
};

export { httpServer };

for (const event of [`uncaughtException`, `unhandledRejection`]) {
	process.on(event, (err) => console.error(`Something bad happened! event: ${err}`));
}
