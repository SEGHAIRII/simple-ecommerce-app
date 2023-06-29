import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";


/*       CONFIGURATIONS           */


dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({origin: ['http://localhost:3001', 'http://192.168.56.1:3001']})
  );


/*    MONGODB SETUP    */

const connect = async ()=>{
try{
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`connection to ${mongoose.connection.name} is successful`);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
catch (error) {
    console.log(error);
  } 

};
connect();  