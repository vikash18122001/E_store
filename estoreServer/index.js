const express=require("express");
const cors=require("cors");


const app=express();
app.use(cors());
const PORT=5000;
const product=require("./Routes/product")
app.use('/product/api',product); 
app.use("/",express.static("Uploads"));
app.listen(PORT,()=>{
    console.log('server is running on '+ PORT)
})

