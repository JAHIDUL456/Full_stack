import express from "express";
import cors from "cors";
const app=express();
app.set('view engine','ejs');
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



app.get('/about/:user',(req,res)=>{
  const {user}=req.params;
  res.send(`this is about page of ${user}`);

})

app.get('/home',(req,res)=>{
  res.render('home');
})

//new api in town 

app.get('/data',(req,res)=>{
  res.json([{
    id:2,
    name:"Rafi",
    roll:30,
    city:"Chittagong",
    country:"Bangladesh"
  },
{
    id:3,
    name:"Rafiq",
    roll:20,
    city:"Khulna",
    country:"Bangladesh"
}])
})

app.listen(5000);