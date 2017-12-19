var friendArr = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendArr);
	});
	app.get("/api/reset", function(req, res) {
		friendArr = require("../data/friends.js");
		res.json(friendArr);
	});
	app.post("/api/friends", function(req, res) {
		var newFriend = req.body;
		friendArr.push(newFriend);
		res.json("You did a thing");
	});
};