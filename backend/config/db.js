import mongoose  from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongo_uri);
        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process(1);
    }
};

