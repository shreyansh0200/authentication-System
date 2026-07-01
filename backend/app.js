require('dotenv').config()
require("./config/database").connect()

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("./model/user")
const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
const auth = require("./middleware/auth")

const loginRouter = require("./routers/loginRoute")
const registerRouter = require("./routers/registerRoute")
const cors = require("cors");
app.use(
  cors({
    origin: "https://authentication-system-ten-rosy.vercel.app/",
    credentials: true,
  })
);

app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("<h1>app is get started </h1>")
})

app.use('/',loginRouter)
app.use('/',registerRouter)

// app.post("/register",async (req,res)=>{
//     try{
//         //collect all information
//         const {firstname,lastname,email,password}= req.body;
//         //validate if all data is exist
//         if(!(password&&email&&lastname&&firstname)){
//             res.status(401).send("all fields is to field complsory")
//         }
//         //check if user is exist already
//         const existingUser = await User.findOne({ email });

//         if(existingUser){
//              res.status(401).send("user is already existing")
//         }

//         //encrypt the passward
//         const myEncyPassword =await bcrypt.hash(password,10);
//         const user = await User.create({
//             firstname,
//             lastname,
//             email,
//             password:myEncyPassword
//         })

//         //create a token and send it to user
//         const token = jwt.sign({
//             id : user._id , email
//         },'shhhhh',{expiresIn :'2h' })

//         user.token=token

//         user.password=undefined;

//         res.status(201).json(user); 
//     }
//     catch(error){
//         console.log(error)
//         console.log("error is response route")

//     }
// })

// app.post("/login",async (req,res)=>{
//     try{    
//         //collect all the info
//         const {email,password} = req.body;
//         // check all info are exist
//         if(!(email&&password)){
//             res.status(401).send("all fields are required to fill")
//         }
//         //check user exist
//         const user = await User.findOne({email});
//         if(!user) {
//             res.status(401).send("filled user is not exist")
//         }
//         if(user && (await bcrypt.compare(password, user.password))){
//             const token = jwt.sign({
//                 id : user._id,email
//             },'shhhhh',{expiresIn : '2h'})

//             user.password=undefined;
//             user.token=token;

//             const options = {
//                 expires: new Date(Date.now() + 3*24*60*60*1000)
//                 ,httpOnly: true
//             }
//             //CREATE TOKE  AND SEND

//             res.status(200).cookie("token" ,token, options).json({
//                 success:true,
//                 token,
//                 user
//             })

//         }
//         res.status(400).send("email or password is in correct")
//     }
//     catch(error){
//         console.log(error)
//     }
// })

app.get("/dashboard",auth,(req,res)=>{
    res.send("Welcome to dashboard");

})

module.exports=app
