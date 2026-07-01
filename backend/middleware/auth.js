const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET;
const auth = (req,res,next)=>{
    console.log(req.cookies);
    const {token} = req.cookies;
    if(!token){
        res.status(401).send("token is not their");
    }
    //verifi cookie;
    try{
        const decode = jwt.verify(token,SECRET)
        console.log(decode)
        req.user= decode;
    }
    catch(error){
        res.status(400).send("token is invalid");
    } 
    return next();
}

module.exports=auth;