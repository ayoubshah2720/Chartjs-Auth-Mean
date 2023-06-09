const router = require('express').Router();
const User = require('../models/UserModel');
const CryptoJS = require('crypto-js');
router.get('/users',(req,res)=>{
    res.send('User test is successful......');
});


router.post('/register', async (req,res)=>{
    console.log('req',req)
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString()
    });
    console.log('consoleUser',newUser)
    try{
        const consoleUser = await newUser.save();
        res.status(201).json(consoleUser);
        console.log('consoleUser',consoleUser)
    } catch(err){
        console.log(err)
        res.status(500).json(err);
    }
});


router.post('/login', async (req,res)=>{
    try{
        // const user = await User.findOne({username: req.body.username});
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("Wrong credentials..!");
        const hashedPass = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
        // const originalPassword = hashedPass.toString(CryptoJS.enc.Utf8);
        // originalPassword != req.body.password && res.status(401).json("Wrong credentials..!");
        // res.status(200).json(user);

        // if you want all information except password then use below lines
        const originalPassword = hashedPass.toString(CryptoJS.enc.Utf8);
        originalPassword !== req.body.password && res.status(401).json("Wrong credentials..!");
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch(err){
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports =  router;