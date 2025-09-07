import express from "express";
import cors from "cors";
const app=express();
// Enable CORS for frontend
app.use(cors({
  origin: 'http://localhost:5173', // allow requests from your frontend
}));

app.use(express.json());

//for the home page
app.get('/',(req,res)=>{
    res.json({
        id:1,
        name:"Islam",
        roll:50,
        city:"Dhaka",
        country:"Bangladesh"
    })
})


//this route is for the profile page

app.get('/profile',(req,res)=>{
  res.send("this is profile page");
})

//dynamic routing 
app.get('/profile/:username',(req,res,next)=>{
  const {username}=req.params;
  res.send(`this is profile page of ${username}`);
  
})






app.listen(5000);