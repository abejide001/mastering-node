const process = require("process")

console.log("running")

setInterval(() => {
    
}, 1e6);

process.on("SIGINT", () => {
    console.log("receving the sig int")
    process.exit(1)
})