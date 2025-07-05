// let name1= process.argv[2]
// let name2 = process.argv[3]
// console.log(`Hello ${name1} and ${name2}`)

// let name = process.argv[2] || "John"
// console.log("Hello "+name)


import express from 'express'
const app = express()

const PORT = process.argv[2] || "8080"
app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`)
})
app.get("/",(req,res) => {
    res.send(`Hello Word from PORT ${PORT}`)
})
