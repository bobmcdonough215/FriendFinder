var friends = require("../data/friends.js");
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var difference;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        // var b = userScores.map(function (item) {
        //     return parseInt(item, 10);
        // });
        // userData = {
        //     name: req.body.name,
        //     photo: req.body.photo,
        //     scores: b
        // };
        console.log("Name: " + userName);
        console.log("User Score: " + userScores);

        // var sum = b.reduce((a, b) => a + b, 0);
        // console.log("Sum of all users score " + sum);
        console.log("Best match " + bestMatch.friendDifference);
        console.log("++++++++++++++++++++++=====================");

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            var newFriend = friends[i];
            difference = 0;
            console.log("Total Diff " + difference);
            console.log("Best match friend diff " + bestMatch.friendDifference);

            for (var j = 0; j < newFriend.scores.length; j++) {
                console.log(newFriend.scores[j]);
                console.log(userScores[j]);
               
                difference += Math.abs(userScores[j] - newFriend.scores[j]);
                console.log("-------------------------> " + difference);

                if (difference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = difference;
                }
            }

            // console.log(totalDifference + "Total Difference");
        }
        // console.log(bestMatch);
        friends.push(userData);
        console.log("New User Added");
        console.log(userData);
        res.json(bestMatch);
    });
};

