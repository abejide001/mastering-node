const process = require("process")

process.on("message", m => {
    console.log(`parents said: ${m}`)
    process.send("I love you too")
})