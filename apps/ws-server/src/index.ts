import "dotenv/config";
import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const wss = new WebSocketServer({ port: 8081 });

wss.on("connection", async (ws) => {
  const user = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  ws.send("Client connected!");
});

console.log("WebSocket server started on port 8081");