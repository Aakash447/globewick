const User = require('../../models/User')
const jwt = require('jsonwebtoken');

exports.registerUser = (req,res) => {
    console.log('============== in registerUser Controller ==============')
    console.log('data:',req.body)
    const user = new User(req.body);
    console.log('user model:',user)
    user.save((err,docs)=>{
        if(err){
            console.log('server error');
            return res.status(500).json({
                message:"Server Error",
            })
        }
        if(!docs){
            console.log('cant get docs');
            return res.status(400).json({
                message:"can't get docs unauthorized"
            })
        }
        console.log('got the docs')
        return res.status(200).json({
            message:"got the docs"
        })
    })
}

exports.loginUser = (req,res) => {
    console.log('============== in loginUser Controller ==============')
    console.log('data:',req.body)
    User.findOne({'username': req.body.username},(err,user)=>{
        if(err){
            console.log('err in server')
            return res.json({
                auth:false,
                message:'error in server'
            })
        }
        if(!user) return res.json({
            auth:false,
            message:'Auth failed, email or password not found',
            userData:false
        });

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                auth:false,
                message:'Wrong email or password',
                userData:false
            });

           user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('auth',user.token).json({
                    auth:true
                })
           })
        })
    }) 
}

exports.logoutUser = (req,res) => {
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        console.log('req.coo')
        res.status(200).json({
            success:true,
            message:'logout successfully'
        })
    })
}