import mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    password: String
});

export = mongoose.model('User', UserSchema);