const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
dotenv.config()

const app = express();

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Database connection Successful......')
}).catch((err)=>{
    console.log(err)
});

app.use(express.json())
app.use(cors());
app.use('/api',authRouter)
app.use('/api',userRouter)

app.listen(process.env.PORT || 3000, () =>{
    console.log(`BE is running fine. ${process.env.PORT}`)
})