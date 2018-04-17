//app/models/poll.js
//grab the mongoose module

var mongoose = require('mongoose');

//define our poll model

module.exports = mongoose.model('poll',{    //Poll- name of a document
    user_token : {type: String, default:''}, 
    question : {type : String, default: ''},
    choice_f : {type : String, default: ''},
    choice_s : {type : String, default: ''},
    choice_t : {type : String, default: ''},
});

//module.exports is the object that's actually returned as the result of a require call.(ex.- java object)
