import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try{
       const conn = await mongoose.connect(process.env.MONGODB_URI);
       console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error){
        console.error(`Error:${error.message}`);
        process.exit(1); //1 code means exit with failures, 0 means success
    }
};
// HxDNLw9XRyon8mxv
// const connectDB = async ()=>{
    
//  console.log(process.env.MONGODB_URI);
//     mongoose.connection.on('connected', ()=>console.log("Database connected with on the database"));
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log(process.env.MONGODB_URI);
// };
// }  
export default connectDB;
