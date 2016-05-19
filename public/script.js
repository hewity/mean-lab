console.log("The Candidate One Day App is working");
"use strict";

(function(){
	angular
	.module("myApp", [
		"ui.router",
		"ngResource"
	])
	.config(Router);

	Router.$inject = ["$stateProvider"];
	function Router($stateProvider) {
		$stateProvider
		.state("index", {
			url: 	"/",
			templateUrl: "/assets/html/candidates-index.html"
		})
		.state("show", {
			url: 	"/:last_name",
			templateUrl: "/assets/html/candidates-show.html"
		});
	}
})();