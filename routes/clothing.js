var express = require("express"),
    router  = express.Router(),
  Product  = require("../models/index");

router.get("/clothing", function(req, res){
    
    // Get all dresses from DB
    Product .find({}, function(err, product){
       if(err){
           console.log(err);
       } else {
          res.render("./clothing/index",{product:product});
       }
    });
});

//CREATE - 
router.get("/clothing/dresses", function(req, res){
    
    // Get all dresses from DB
    Product.find({}, function(err, product){
       if(err){
           console.log(err);
       } else {
          res.render("./clothing/dress",{product:product});
       }
    });
});

// router.post("/clothing/dresses", function(req, res){
//     // get data from form and add to dress array
//     var name = req.body.name;
//     var image = req.body.image;
//      var price = req.body.price;
//       var desc = req.body.description;
//     var newDress = {name: name, image: image,description: desc, price:price};
    
//     // Create a new dress and save to DB
//     Clothing.create(newDress, function(err, newlyCreated){
//         if(err){
//             console.log(err);
//         } else {
//             //redirect back to dress page
//             res.redirect("/clothing/dresses");
//         }
//     });
// });

router.post("/clothing/dresses", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var price = req.body.price
    var newDress = {name: name, image: image, description: desc,price:price}
    // Create a new campground and save to DB
    Product.create(newDress, function(err, newproduct){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/clothing/dresses");
        }
    });
});



// SHOW - shows more info about one dress
router.get("/clothing/dresses/:id", function(req, res){
    //find the campground with provided ID
    Product.findById(req.params.id,function(err,newproductdress ){
        if(err){
            console.log(err);
        } else {
            console.log(newproductdress);
            //render show template with that campground
            res.render("./clothing/show", {product: newproductdress});
        }
    });
});



module.exports = router;