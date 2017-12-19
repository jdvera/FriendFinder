var friendArr = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendArr);
	});
	app.post("/api/reset", function(req, res) {
		friendArr = [
		{
			name: "James",
			photo: "https://avatars0.githubusercontent.com/u/32854952?s=460&v=4",
			scores: ["3", "4", "5", "3", "4", "1", "5", "4", "1", "2"]
		},
		{
			name: "Spongebob Squarepants",
			photo: "http://s1.thingpic.com/images/FZ/BNT6TL6c2YdMp9kHeARDkxNj.png",
			scores: ["5", "1", "1", "5", "5", "1", "1", "1", "5", "5"]
		},
		{
			name: "CGPGrey",
			photo: "https://qph.ec.quoracdn.net/main-qimg-9b72f8e5c6f6337b77663fd8a81fb591-c",
			scores: ["4", "4", "3", "3", "2", "3", "5", "1", "1", "1"]
		},
		{
			name: "Trump",
			photo: "https://venezuelanalysis.com/files/images/2017/07/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners_1.jpg",
			scores: ["5", "1", "5", "5", "1", "5", "5", "5", "1", "5"]
		}
		];
		res.json(friendArr);
	});
	app.post("/api/friends", function(req, res) {
		var newFriend = req.body;
		friendArr.push(newFriend);
		res.json("You did a thing");
	});
};