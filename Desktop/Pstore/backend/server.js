import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import Product from "./models/product.model.js";
// import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";
import cors from "cors";

dotenv.config();
console.log(process.env.MONGODB_URI);
const app = express();
connectDB();
const PORT = process.env.PORT || 5000
app.use(express.json());//allows us to accept json letter.
//app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credential: true
}));


app.use("/api/products", productRoutes);


console.log(process.env.MONGO_URI);

app.listen(PORT, ()=>{console.log("Server started at http://localhost:" + PORT);
    
});