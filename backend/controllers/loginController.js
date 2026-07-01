const User = require("../model/user");
const bcrypt = require("bcryptjs");   
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

exports.loginController = async (req,res)=>{
    try{    
        //collect all the info
        const {email,password} = req.body;
        // check all info are exist
        if(!(email&&password)){
            res.status(401).send("all fields are required to fill")
        }
        //check user exist
        const user = await User.findOne({email});
        if(!user) {
            res.status(401).send("filled user is not exist")
        }
        if(user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign({
                id : user._id,email
            },SECRET,{expiresIn : '2h'})

            user.password=undefined;
            user.token=token;

            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000)
                ,httpOnly: true
            }
            //CREATE TOKE  AND SEND

            res.status(200).cookie("token" ,token, options).json({
                success:true,
                token,
                user
            })

        }
        res.status(400).send("email or password is in correct")
    }
    catch(error){
        console.log(error)
    }
}


