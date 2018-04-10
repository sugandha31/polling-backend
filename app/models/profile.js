//app/models/nerd.js
//grab the mongoose module

var mongoose = require('mongoose');

//define our nerd model

module.exports = mongoose.model('profile',{    //Profile- name of a document
    user_token : {type: String, default:''}, 
    email : {type : String, default: ''},
    password : {type : String, default: ''}
});

//module.exports is the object that's actually returned as the result of a require call.(ex.- java object)
