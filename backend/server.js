import exprees from "express";
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./src/routers/routers.js";


const app = exprees();
app.use(cors());
app.use(exprees.json());
dotenv.config();

const connectDB = async ()=>{await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
}
connectDB();

app.get("/" , (req ,res)=>{res.send("working");});

app.use("/api/users" , router);

const PORT = process.env.PORT || 5000;
app.listen(PORT ,()=>{
    console.log(`server is running on ${PORT}`);
});