
var path = require("path");

// Routes
// =============================================================
module.exports = function(app){
// Basic route that sends the user first to the home Page


    app.get("/survey", function(req, res) {
        console.log(req);
        res.sendFile(path.join(__dirname, "./../public/survey.html"));
    });
    // Error: ENOENT: no such file or directory, stat 'C:\Users\brayd\Desktop\Code\homeWork\FriendFinder\app\routing\app\public\home.html'
    // If no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });

};

