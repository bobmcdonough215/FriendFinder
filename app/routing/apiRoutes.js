var friends = require("../data/friends.js");
module.exports = function (app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

app.post("/api/friends", function(req,res){
    var difference = 0;
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };
    var userData =req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    });


};

