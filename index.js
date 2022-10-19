const express = require('express')
const app = express()
const port = 3000

app.get("/", (reg, res) =>{
  res.send("Hola Mundo")
})

app.listen(port, ()=>{
  console.log("Mi Puerto es "+ port)
})