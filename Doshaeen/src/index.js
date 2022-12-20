const express = require ("express");
const connect = require("./config/db");
const app = express();
app.use(express.json());


const userController=require("./controller/userController")
const {register,login}=require("./controller/authController")

app.use("/user",userController)
app.use("/register",register)
app.use("/login",login)
app.listen(5000,async()=>{
    try {
        await connect();
        console.log("listening 5000")
    }catch (error) {
        console.log(error.message);
    }
});