var express = require("express");
var app=express();
app.set("view engine","ejs");
 
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));
var dost = ["Abhishek","Vishal pratap singh Chandel", "Rahul","Bobby"];
// app.use(express.static("view"));

app.get("/friends",function(req,res){
	
	res.render("friend",{dosti: dost});
});

app.post("/addfriend",function(req,res){
       var newf=req.body.newfriend;
       dost.push(newf);
	res.redirect("/friends");
});

app.get("/",function(req,res){
	res.render("home")
});




app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
  console.log("server has started");
});
