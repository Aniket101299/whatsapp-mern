import mongoose from "mongoose";

const DB_CONNECTION_URL = "mongodb+srv://aniket:Aniketwhatsapp@cluster0.k6cw6vn.mongodb.net/whatsappdb?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true";
// mongodb+srv://<user>:<password>@********.mongodb.net/<db name>?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true
const connectDB = () => {

    console.log("DB trying to connect on " + new Date());

    // const options = {
    //     keepAlive: 1,
    //     autoReconnect: true,
    //     poolSize: 10,
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // };
    // , options

    return mongoose.connect(DB_CONNECTION_URL);
};

export default connectDB;