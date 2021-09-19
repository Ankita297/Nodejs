// first require the express  and initalize the app 
const express=require("express");
const app=express();

// require body parser and   see the documentation 
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())


// require qr code 

var QRCode = require('qrcode')


// creating the get route 
app.get("/",function(req,res){
    console.log(__dirname);
    
res.sendFile(__dirname+"/index.html")
})

// creating the post route 

app.post("/",function(req,res){
    console.log(req.body.text);
    QRCode.toString(req.body.text,{type:'terminal'}, function (err, url) {
        console.log(url)
      })
      
    res.send("<h1>Thank you</h1>")
})


app.listen(3000,function(res,res){
    console.log("listening to port 3000");
})