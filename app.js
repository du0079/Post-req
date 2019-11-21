var express = require("express");
var app=express();
app.set("view engine","ejs");
 
var bodyparser = require("bodyparser");

app.usr(bodyparser.urlencode({extended: true}));
var dost = ["Abhishek","Vishal pratap singh Chandel", "Rahul","Bobby"];
// app.use(express.static("view"));


app.post("/addfriend",function(req,res){
       var newf=req.body.newfriend;
       dost.push(newf);
	res.redirect("/addfriend");
});

app.get("/",function(req,res){
	res.render("home")
});

app.get("/friends",function(req,res){
	
	res.render("friend",{dosti: dost});
});



app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
  console.log("server has started");
});