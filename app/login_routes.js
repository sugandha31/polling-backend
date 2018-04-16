//app/routes.js
var profile = require('./models/profile');

module.exports = function(app){
    //server routes=========================

    //handle things like api calls
    //authentication routes
    //sample api route
    //app.get to handle GET requests and app.post to handle POST requests

    app.post('/signup',function(req,res){

      var new_profile=new profile();
      new_profile.user_token=req.body.u_token;
      new_profile.email=req.body.email;
      new_profile.password=req.body.password;
      new_profile.save(function(err,profile){
        if(err)
        console.log(err);
          console.log("saved"+profile);
          res.json(profile);
      });

    });

    app.post('/login', function(req,res){
    //use mongoose to get all polls(docs) in the database
            //TRy to implement login here
            //hint : findone query
            
            
    });

    //route to handle delete goes here(app.delete)

    //frontend routes========================

    //route to handle all angular requests
    app.get('*', function(req,res){
     //   res.sendfile('./public/views/index.html'); //load our public/index.html file
    });
};
