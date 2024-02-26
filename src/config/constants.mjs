const HOST = process.env.HOST ?? "http://localhost";
const PORT = process.env.PORT ?? 3334;
const BASE_URL = `${HOST}:${PORT}`;
const WEB_SOCKET_MAGIC_STRING = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
export { HOST, PORT, BASE_URL, WEB_SOCKET_MAGIC_STRING };
