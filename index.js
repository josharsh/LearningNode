const express=require('express');
const app = express();
let counter=1;

/*
To Do's
1 - Create a new Route for home page
2 - Home page template file must have a button that links to the resume route
3 - Resume route should diplay your dummy resume

*/

app.get("/resume",function(req,res){
     res.render("index.ejs",{name:counter});
});
app.use(express.static('public'))

app.listen(3000,function(){
    console.log("Server is up");
})

