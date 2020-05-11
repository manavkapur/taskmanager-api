const express=require('express')

const userouter=require('./router/user')
const taskrouter=require('./router/tasks')
require('./db/mongoose')


const app=express()

const port=process.env.PORT 

// app.use((req,res,next)=>{
//  if(req.method=='GET'){
//    res.send('GET requests not accepted ')

//  }
//  else{
//    next()
//  }
  
  
// })
// app.use((req,res,next)=>{
//   res.status(503).send('Service not available' )
// })
app.use(express.json())
app.use(userouter)
app.use(taskrouter)


app.listen(port,()=>{
  console.log('Server is up on port '+port);
  
})
const jwt =require('jsonwebtoken')

const tasks =require('./models/tasks')
const User = require('./models/user')




