var express = require("express"),
    router  = express.Router(),
  Product  = require("../models/index"),
   Cart  = require("../models/cart");

  
  router.post("/add_to_cart", function(req, res){
      var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var price = req.body.price
      var productId = req.params.id;
      var cart = new (name.image.price.desc.req.session.cart? name.image.price.desc.req.session.cart:{items:{}});
      Product.create(cart, function(err, product){
       if(err){
           console.log(err);
       } else {
           
           res.redirect("/shopping_cart");
       }});});
       
    


module.exports = router;