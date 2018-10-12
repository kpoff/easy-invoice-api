// routes/auth-routes.js

const express    = require('express');
const authRoutes = express.Router();

const passport   = require('passport');
const bcrypt     = require('bcryptjs');

// require the user model !!!!
const User       = require('../models/User');


authRoutes.post('/signup', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const role = "Contractor";
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const businessName = req.body.businessName;
    const address = req.body.address;
    const phone = req.body.phone;

  
    if (!email || !password) {
    //  res.status(400).json({ error: 'Provide username and password' });
        res.json({ error: 'Provide email and password' }).status(400);
      return;
    }

    if(password.length < 7){
    //    res.status(400).json({ error: 'Please make your password at least 7 characters long for security purposes.' });
        res.json({error: 'Please make your password at least 7 characters long for security purposes.'}).status(400);
        return;
    }
  
    User.findOne({ email }, (err, foundUser) => {

        if(err){
            res.status(500).json({error: "Email check went bad."});
            return;
        }

        if (foundUser) {
            res.json({ error: 'Email taken. Choose another one.' }).status(400);
            return;
        }
  
        const salt     = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
  
        const aNewUser = new User({
            email: email,
            password: hashPass,
            role: role,
            firstName: firstName,
            lastName: lastName,
            businessName: businessName,
            address: address,
            phone: phone
        });
  
        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ error: 'Saving user to database went wrong.' });
                return;
            }
            
            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' });
                    return;
                }
            
                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
});



authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }
    
        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.json(failureDetails).status(401)
            return;
        }

        // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            }

            // We are now logged in (that's why we can also send req.user)
            res.status(200).json(theUser);
        });
    })(req, res, next);
});


authRoutes.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.json({ message: 'Log out success!' }).status(200);
});


authRoutes.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ error: 'Unauthorized' });
});





module.exports = authRoutes;