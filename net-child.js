const process = require("process");

process.on("message", (message, server) => {
  console.log(message);
  server.on("connection", (socket) => {
    socket.end("Child connection handled");
  });
});
