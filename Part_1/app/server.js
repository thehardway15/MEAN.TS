#!/usr/bin/env node
var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("Ja żyję")
});

app.listen(3000, function(){
    console.log('Serwer działa na porcie 3000!')
});