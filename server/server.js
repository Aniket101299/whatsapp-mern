// import APP from "express";
// import connectDB from "./dbConnection/index.js";

// const app = new APP();

// const PORT = 3001;

// const startServer = () => {
//     Promise.all([connectDB()]).then(() => {
//         app.listen(PORT);
//         console.log(`Server started on Port ${PORT}`);
//     })
//     .catch((error) => console.error(`Unable to start the server`, error));
// };

// startServer();

// importing 
import express from 'express';
import mongoose from "mongoose";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 5678;

// middleware
app.use(express.json());
app.use(cors());


// step 1 :- connect to mongodb
// const connection_url = "mongodb+srv://aniket:Aniketwhatsapp@cluster0.k6cw6vn.mongodb.net/whatsappdb?retryWrites=true&w=majority";
const connection_url = "mongodb://aniket:Aniketwhatsapp@ac-7kq4qzg-shard-00-00.k6cw6vn.mongodb.net:27017,ac-7kq4qzg-shard-00-01.k6cw6vn.mongodb.net:27017,ac-7kq4qzg-shard-00-02.k6cw6vn.mongodb.net:27017/?ssl=true&replicaSet=atlas-12w1zx-shard-0&authSource=admin&retryWrites=true&w=majority";
const connect = () => {
  return mongoose.connect(connection_url, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
};


app.listen(port, async function () {
    try {
      await connect();
      console.log("listening on port 5678");
    } catch (e) {
      console.log("Error while connecting to DB ", e.message);
    }
  });

