const User = require('../models/User');


const AuthMW = (req,res,next) => {
    let token = req.cookies.auth;
    console.log('req.cookies:',req.cookies)
    console.log('AuthMW cookie:',token)

    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.send(false);

        req.token = token;
        req.user = user;
        next();
    })
}

module.exports = AuthMW ;