const { application } = require('express')
const express = require('express')
const routerApi = require('./routes')

const app = express()
const port = 3000


app.get("/", (req, res) =>{
  res.send("Hola Mundo")
})

routerApi(app)

app.listen(port, ()=>{
  console.log("Mi Puerto es "+ port)
})
