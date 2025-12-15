import mongoose from "mongoose";

const DB_URL = process.env.MONGODB_URL;

if(!DB_URL){
    throw new Error("Missing MongoDb Url..");
}

export const ConnectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1);
    }
}