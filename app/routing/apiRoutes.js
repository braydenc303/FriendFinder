// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// var express = require("express");
var path = require("path");

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");

// Routes
// =============================================================
module.exports = function(app){
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var newPerson = req.body;
    var scores = [];
    for(var i = 0; i < newPerson.scores.length; i++){
        var score = parseInt(newPerson.scores[i]);
        scores.push(score);
    }

    newPerson.scores = scores;


    // console.log(newPerson);

    for(var i = 0; i < friendsData.length; i++){
        var total = 0;
        for(var n = 0; n < scores.length; n++){
            var diff = Math.abs(scores[n] - friendsData[i].scores[n]);
            total += diff;
        }
        console.log(total);
    }
    
//     6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.

  //   This needs to happen at the end, or you have the possibility of comparing the new user to themselves.
    friendsData.push(newPerson);
    res.json(newPerson);
  });



};
