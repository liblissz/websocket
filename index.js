 const express = require('express');
 const path = require("path")
 const app = express()
const port = 2000;
 //start API
//set up static folder

app.use(express.static(path.join(__dirname, "public")))

// set up static

//  app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, "public", "index.html"))
//  })
//   app.get('/about', (req,res)=>{
//     res.sendFile(path.join(__dirname, "public", "about.html"))
//  })

 app.listen(port, ()=>{
 console.log(`app is running on port ${port}`)
 })
//npm run dev