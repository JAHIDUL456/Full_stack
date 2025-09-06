const express =require('express');
const app= express();

app.get('/',(req,res)=>{
    res.json({
        id:1,
        name:"Islam",
        roll:50,
        city:"Dhaka"
    })
})

app.listen(5000);