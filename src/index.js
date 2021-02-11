const express = require('express')
require('./db/mongoose.js')
const app = express()

const port = process.env.PORT

const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')
app.use(express.json())

app.use(userRouter,taskRouter)
app.listen(port,()=>{
    console.log('server running on '+port)
})