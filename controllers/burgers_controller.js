var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req,res){
	burger.selectAll(function(data){
		var hbsObject = {
			burgers: data
		};

		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});


router.post("/", function(req,res){
	burger.insertOne([
		"burger_name", "devoured"
		], [
			req.body.burger,0
		], function(){
			res.redirect("/");
		});
});


router.put("/:id", function(req,res){
	var burgerId = req.params.id;

	burger.updateOne({
		devoured:true
	}, burgerId, function(){
		res.redirect("/");
	});
});

module.exports = router;