var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash');
var bodyParser = require('body-parser');






var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');






//invocamos a express 








const express = require("express");
const app = express ();






// seteamos urlcoded capturar datos
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//dotenv
const dotenv= require("dotenv");
dotenv.config({path:"./env/.env"}
);






//public directorio
app.use("/resources",express.static("public"));
app.use("/resources",express.static(__dirname+"./public"));


//motor de plantilla
app.set("view engine", "ejs");

app.use("/", require("./router"));

// invocamos bcryptjs
const bcryptjs = require("bcryptjs");


//


// var de session
const session= require("express-session");
app.use(session({
    secret:"1234569",
    resave:false,
    saveUninitialized:true,
}))


app.use(flash());
 
//app.use('/', indexRouter);
app.use('/', usersRouter);
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
 
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
   
});








app.get("/register", (req, res) => {
    res.render("register");
})



// invocamos al modulo de conexion de la base de datos


const connection = require("./database/db");
const { path } = require("express/lib/application");
const router = require('./routes/users');











 app.listen(5000,(req,res)=>{
    console.log("server running in http://localhost:5000");
})