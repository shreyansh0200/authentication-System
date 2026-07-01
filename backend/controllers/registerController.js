const User = require("../model/user");
const bcrypt = require("bcryptjs");   
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

exports.registerController = async(req,res)=>{
    try{
        //collect all information
        const {firstname,lastname,email,password}= req.body;
        //validate if all data is exist
        if(!(password&&email&&lastname&&firstname)){
            res.status(401).send("all fields is to field complsory")
        }
        //check if user is exist already
        const existingUser = await User.findOne({ email });

        if(existingUser){
             res.status(401).send("user is already existing")
        }

        //encrypt the passward
        const myEncyPassword =await bcrypt.hash(password,10);
        const user = await User.create({
            firstname,
            lastname,
            email,
            password:myEncyPassword
        })

        //create a token and send it to user
        const token = jwt.sign({
            id : user._id , email
        },SECRET,{expiresIn :'2h' })

        user.token=token

        user.password=undefined;

        res.status(201).json(user); 
    }
    catch(error){
        console.log(error)
        console.log("error is response route")

    }

}