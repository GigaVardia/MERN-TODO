const express = require('express');
const {check, validationResult} = require('express-validator');
const router = express.Router();
const User = require('../MongoDB/userModel');
const bcrypt = require('bcryptjs');

router.post('/auth/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Incorrect password').isLength({min:6})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(), msg: "Incorrect email or password"
            })
        };

        const data = req.body;
        const newUser = {
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password,
            data: []
        };

        const candidate = await User.findOne({email: newUser.email});

        if (candidate) {
            return res.status(400).json({msg: "This email already used"})
        }

        const hashedPassword = await bcrypt.hash(newUser.password, 12);
        const user = new User({...newUser, password: hashedPassword});

        await user.save();

        res.status(201).json({msg: 'New user created'});
    } catch (e) {
        res.status(500).json({msg: "Error while sing up..."})
    }
});


router.post('/auth/login',
    [
        check('email', 'Enter correct email').normalizeEmail().isEmail(),
        check('password', 'Enter correct password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(), msg: "Incorrect email or password"});
            }

            const {email, password} = req.body;

            const user = await User.findOne({email});

            if (!user) {
                return res.status(400).json({msg: "User not found"})
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({msg: "Incorrect password"});
            }

            return res.json({msg: "Successful sign in", payload: user})
        } catch (e) {
            res.status(500).json({msg: "Error while sing in...."})
        }
    }
)

router.patch('/saveuser',
    async (req, res) => {
        try {
            const {email, data} = req.body;
            const candidate = await User.findOne({email})
            if (!candidate) {
                return res.status(400).json({msg: "User not found, while saving data"})
            }

            await User.updateOne({_id: candidate._id}, {$set: {data}})

            res.json({msg: "User saved successful!"})
        } catch (e) {
            res.status(500).json({msg: "Error while saving data...."})
        }
    }
)

module.exports = router;