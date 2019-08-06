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

    var b = userScores.map(function(item){
        return parseInt(item, 10);
    });
    userData = {
        name: req.body.name,
        photo: req.body.photo,
        scores: b
    };
    console.log("Name: " + userName);
    console.log("User Score: " + userData);

    var sum = b.reduce((a, b) => a + b, 0);
    console.log("Sum of all users score " + sum);
    console.log("Best match " + bestMatch.friendDifference);
    console.log("++++++++++++++++++++++=====================");
    
    for(var i = 0; i < friends.length; i ++){
        console.log(friends[i].name);
        totalDifference = 0;
        console.log("Total Diff " + totalDifference);
        
    }

});
};

