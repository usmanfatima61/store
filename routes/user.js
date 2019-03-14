var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/myaccount", function(req,res){
    res.render("./user/user");
});

router.get("/myaccount/signup", function(req,res){
    res.render("./user/sign_up");
});

router.post("/myaccount/signup", function(req,res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
    return res.render("./user/sign_up");
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/");
        });
    });
});



router.get("/myaccount/signin", function(req,res){
    res.render("./user/sign_in");
});

router.post("/myaccount/signin", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/myaccount/signin"
}) ,function(req, res){
});

router.get("/myaccount/signout", function(req, res) {
     req.logout();
     res.redirect("/");
 });


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/myaccount/signin");
}
 
module.exports=router;