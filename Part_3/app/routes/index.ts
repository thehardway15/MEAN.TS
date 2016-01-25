import express = require('express');
import User = require('../models/user')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    User.find(function(err, users) {
        if (err)
            res.send(err);
        res.json(users);
    });
});

export = router;
