const cp = require("child_process")

let  child = cp.fork(`${__dirname}/lovechild.js`)

child.on("message", m => {
    console.log(`child said ${m}`)
})

child.send("i love you")