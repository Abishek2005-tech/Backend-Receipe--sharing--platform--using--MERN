const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./models/User')
const bcrypt=require('bcryptjs')




const app=express()
const PORT=3000
app.use(express.json());

//home page api

app.get('/',(req, res)=>{
   res.send("<h1 align=center>Welcome to the MERN stack week 2 session</h1>")
})

//reg page api
app.post('/register',async(req, res)=>{
    const {username,email,password}=req.body
    try{
        const hashedPassword= await bcrypt.hash(password,10)
        const user=new User ( {username,email,password:hashedPassword})
        await user.save()
        res.json({message: "User Registered"})
        console.log("User Registration completed...")

    }
 catch(err)
 {
    console.log(err)
 }

})
//login page api

app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{ 
        const user = await User.findOne({email});
        if (!user || ! (await bcrypt.compare(password, user.password)))
        {
            return res.status(400).json({ message: "Invalid Credentials"});

        }
        res.json({ message: "Login Succesfull", username: user.username  });
    }
    catch(err)
    {
       
        console.log(err)
    }
})



mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("DB connected succesfully..")
).catch(
     (err)=>console.log(err)
)


app.listen(PORT,(err)=>
{
    if(err)
    {
        console.log(err)
    }
    console.log("server is running on port :"+PORT)
    })