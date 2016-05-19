var mongoose	=	require("./connection");
var seed_data	=	require("./candidate_seeds");

var Candidate 	= 	mongoose.model("Candidate");

Candidate.remove().then(function(){
	Candidate.collection.insert(seed_data).then(function(){
		process.exit();
	});
});