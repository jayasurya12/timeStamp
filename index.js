const fs=require("fs");
const path=require("path")
const express=require("express");
let print=console.log;
const app=express();

app.get("/",(req,res)=>{

const timestamp=Date.now()
let date=new Date();
let nowday=new Date().toDateString();

let today=date.getDate();

let month=1+date.getMonth();
let year=date.getFullYear();

let time=date.getHours();
let minute=date.getMinutes();
let seconds=date.getSeconds();

let times=(`${time}:${minute}:${seconds}`);
let newset=times.toLocaleString()

fs.mkdir(`${__dirname}/timestamp`,{recursive:true},(err)=>{
    if(err)console.log(err);
})
res.send("Hello")
fs.writeFile(`${__dirname}/timestamp/${nowday}.txt`,timestamp.toLocaleString(),(err)=>{
    if(err){
        print('some err')
    }
})
})
app.listen(5000,()=>{
    print("server Run")
})

  