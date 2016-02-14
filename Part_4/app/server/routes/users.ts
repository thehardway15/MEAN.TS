import express = require('express');
import User = require('../models/user')
var router = express.Router();

/* POST user create. */
router.post('/create', function(req, res) {
        
    var user = new User();      // create a new instance of the User model
    user.name = req.body.name;  // set the user name (comes from the request)
    user.password = req.body.password; // set the user password (comes from the request)

    // save the user and check for errors
    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'User created!' });
    });
});

router.post('/login', function(req, res) {
        
    var name = req.body.name;  
    var password = req.body.password;
    
    User.findOne({ name: name, password: password }, (error, user) => {
        if (error) {
            res.send(400);
        } else {
            if(user){
                res.send("user name " + user.name + " login");
            }else{
                res.send('wrong username or passowrd');
            }
        }
    });
});

export = router;
