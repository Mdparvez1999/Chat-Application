import http from "http";
import { app } from "./index.js";

const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, (err) => {
    if (err) console.log("errorn in starting server : ", err);
    else console.log(`server is running on http://localhost:${PORT}`);
});
