//app/routes.js
//grab the poll model(document) we just created
var poll = require('./models/poll');

module.exports = function(app){
    //server routes=========================

    //handle things like api calls
    //authentication routes
    //sample api route
    //app.get to handle GET requests and app.post to handle POST requests

    app.post('/insertnew',function(req,res){

      var newpoll=new poll();
      newpoll.user_token=req.body.u_token;
      newpoll.question=req.body.question;
      newpoll.choice_f=req.body.choice_f;
      newpoll.choice_s=req.body.choice_s;
      newpoll.choice_t=req.body.choice_t;
      newpoll.save(function(err,poll){
        if(err)
        console.log(err);
          console.log("saved"+poll);
          res.json(poll);
      });
      
    });

    app.get('/api/poll', function(req,res){
    //use mongoose to get all polls(docs) in the database

        poll.find(function(err, poll){
            //if there is an error retrieving, send the error.
            //nothing after res.send(err) will execute
            console.log(poll);
            if(err)
                res.send(err);
            res.json(poll); //returns all polls in json format
        });
    });

    //route to handle creating goes here(app.post)
    //route to handle delete goes here(app.delete
    //frontend routes========================

    //route to handle all angular requests
    app.get('*', function(req,res){
     //   res.sendfile('./public/views/index.html'); //load our public/index.html file
    });
};
