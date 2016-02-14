import express = require('express');
import path = require('path')
import User = require('../models/user')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html');
});

export = router;
