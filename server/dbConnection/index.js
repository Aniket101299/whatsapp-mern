// import mongoose from "mongoose";

// const DB_CONNECTION_URL = "mongodb+srv://aniket:Aniketwhatsapp@cluster0.k6cw6vn.mongodb.net/whatsappdb?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true";
// // mongodb+srv://<user>:<password>@********.mongodb.net/<db name>?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true
// const connectDB = () => {

//     console.log("DB trying to connect on " + new Date());

//     // const options = {
//     //     keepAlive: 1,
//     //     autoReconnect: true,
//     //     poolSize: 10,
//     //     useNewUrlParser: true,
//     //     useUnifiedTopology: true,
//     // };
//     // , options

//     return mongoose.connect(DB_CONNECTION_URL);
// };

// export default connectDB;


import mongoose from "mongoose";

// connect to mongodb
// const connection_url = "mongodb+srv://aniket:Aniketwhatsapp@cluster0.k6cw6vn.mongodb.net/whatsappdb?retryWrites=true&w=majority";
const connection_url = "mongodb://aniket:Aniketwhatsapp@ac-7kq4qzg-shard-00-00.k6cw6vn.mongodb.net:27017,ac-7kq4qzg-shard-00-01.k6cw6vn.mongodb.net:27017,ac-7kq4qzg-shard-00-02.k6cw6vn.mongodb.net:27017/?ssl=true&replicaSet=atlas-12w1zx-shard-0&authSource=admin&retryWrites=true&w=majority";
const connect = () => {
  return mongoose.connect(connection_url, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
};

export default connect;
