import http from "http";
import { Server } from "socket.io";

import { app } from "./index.js";

const server = http.createServer(app);

export const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    }
});

const userScoketMap = {};

export const getRecieverSocketId = (recieverId) => {
    return userScoketMap[recieverId];
}

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId != "undefined") userScoketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userScoketMap));

    socket.on("disconnect", () => {
        console.log("disconnected : ", socket.id);
        delete userScoketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userScoketMap));
    })
})

const PORT = process.env.PORT;

server.listen(PORT, (err) => {
    if (err) console.log("errorn in starting server : ", err);
    else console.log(`server is running on http://localhost:${PORT}`);
});
