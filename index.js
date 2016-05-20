var express		= require("express");
var hbs			= require("express-handlebars");
var mongoose	= require("./db/connection");

var app			= express();

var Candidates 	= mongoose.model("Candidate");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
	extname: 	".hbs",
	layoutsDir: "views",
	partialsDir:"views",
	defaultLayout:"layout-main"
}));

app.use("/assets", express.static("public"));
app.get("/", function(req, res) {
	res.render("main", {layout: false});
});

app.get("/api/candidates/:names", function(req, res){
	Candidates.findOneAndUpdate(req.params, req.names, {new:true}).then(function(candidates){
		res.json(candidates);
	});
});

app.listen(app.get("port"), function(){
	console.log("I'm working");
});
