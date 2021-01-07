const express=require('express');
const bodyParser=require('body-parser');
const app = express();
let name=1;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.get("/",function (req,res)
{res.render("form.ejs",{name:"Harsh Joshi"});});

app.get("/resume",function (req,res)
{res.render("resume.ejs",{summary:"Harsh Joshi"});});

app.post("/create-resume",function(req,res)
{res.render("resume.ejs",

{summary:req.body.summary,
    name:req.body.name,
    email:req.body.email
});
});

app.use(express.static('public'));

app.listen(3000,function(){
    console.log("Server is up");
})

