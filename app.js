var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    cookieParser = require("cookie-parser"),
    session    =  require("express-session"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    methodOverride = require("method-override"),
    Product  = require("./models/index"),
    User        = require("./models/user"),
    Cart        = require("./models/cart"),
    seedDB      = require("./seeds"),
    MongoStore = require('connect-mongo')(session);
    
    
    
    // Rquiring ROUTES

var indexRoutes = require("./routes/index");
var clothingRoutes = require("./routes/clothing");
var userRoutes = require("./routes/user");
var cartRoutes = require("./routes/cart");

// var Rabiamoda = require("./models/index");

// mongoose.connect to database
mongoose.connect("mongodb://localhost:27017/rabiamoda", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); // for stylesheet to work
app.use(methodOverride("_method"));
app.use(flash());
app.use(cookieParser());
//seedDB();


// passport coniguration
app.use(require("express-session")({
    secret:"fzahara",
    resave:false,
    saveUninitialized:false,
    store: new MongoStore({mongooseConnection:mongoose.connection}),
    cookie:{maxAge: 180*60*100}
    
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
res.locals.currentUser = req.user;
res.locals.session= req.session;
   next();
});



// Using Routes 
app.use( indexRoutes);
app.use( clothingRoutes);
app.use(userRoutes);
app.use(cartRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log(" Server Has Started!");
});