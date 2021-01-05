const { response } = require('express');
var express=require('express');
var app = express();

app.get("/harsh",function(req,res){
     res.send("<h1>Hello There</h1>");
});

app.listen(3000,function(){
    console.log("Server is up");
})

