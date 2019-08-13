var friends = require("../data/friends.js");
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var maxDifference = Infinity;
        var bestMatch = {};
        console.log(req.body);
        for (i = 0; i < friends.length; i++) {
            var totalDifference = 0;
 
            for (j = 0; j < friends[i].scores.length; j++) { 
            var friendsScore = friends[i].scores[j];
            var userScore = req.body.scores[j];
            console.log(friendsScore, userScore);
            totalDifference+=Math.abs(parseInt(friendsScore)-parseInt(userScore));
            console.log(totalDifference);

            };
            if(totalDifference<maxDifference){
                maxDifference=totalDifference
                bestMatch= friends[i]
            }

        };
console.log(bestMatch);
console.log(maxDifference);
        friends.push(req.body);
        res.json(bestMatch);
    });
};

