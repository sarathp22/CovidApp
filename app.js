const express=require("express");
const app=new express;
const bodyParser= require('body-parser');
const cors= require('cors');
var path=require('path');
var port=process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})
app.get('/',(req,res)=>{
    // res.send("Hai");
                    })
app.listen(port,()=>{
console.log("server running on port no " + port );
                    });