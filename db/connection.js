var mongoose	= require("mongoose");

mongoose.connect("mongodb://localhost/voteforpresident");

var Candidate = mongoose.Schema({
	title: String,
	first_name: String,
	middle_name: String,
	last_name: String,
	votes: Number
});

mongoose.model("Candidate", Candidate);



module.exports	= mongoose;
