import express from "express";
import cors from "cors";
const app=express();
// Enable CORS for frontend
app.use(cors({
  origin: 'http://localhost:5173', // allow requests from your frontend
}));

app.use(express.json());
app.get('/',(req,res)=>{
    res.json({
        id:1,
        name:"Islam",
        roll:50,
        city:"Dhaka"
    })
})

app.listen(5000);