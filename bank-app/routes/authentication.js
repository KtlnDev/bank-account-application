const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const jwt_decode = require('jwt-decode');

router.post('/register', async (req,res) => {

    const { firstName, lastName, email, password, confirmPassword} = req.body;
    
    if(password.length < 6)
        return res.status(400).json({
            errorMessage:"Please enter a password with at least 6 characters"
        });
    
    if(password !== confirmPassword)
        return res.status(400).json({
            errorMessage:"Passwords do not match"
        });
    
    const existingUser = await User.findOne({email});
    if(existingUser) return res.status(409).json({
        errorMessage:"This email address is already used"
    });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword
    });
    try{
        await newUser.save();
        res.status(201).send({
            message: "Account created!"
        });
    }
    catch(err){
        res.status(500).send(err);
    }
});

router.post('/login', async (req,res) => {
    try{
        const{ email, password} = req.body;

        const existingUser = await User.findOne({email});

        if(!existingUser) 
            return res.status(404).json({
                errorMessage:"This email doesn't exist"
            });
        
        const verifyPassword = await bcrypt.compare(password, existingUser.password);
        if(!verifyPassword)
            return res.status(400).json({
                errorMessage:"Your password is incorrect"
            });
        
        const token = jwt.sign({_id: existingUser._id, firstName: existingUser.firstName, lastName: existingUser.lastName}, process.env.TOKEN_SECRET);
            res.cookie('access_token',token,{
                httpOnly: true,
            }).send("Login successfully");

    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;