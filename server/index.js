import express  from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors());
app.use(express.json({ limit:'50mb'}));

app.use('/api/v1/post' , postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req,res)=>{
    res.send('Hello from Dall-E!')
})

const startServer = async()=>{
    try{
    connectDB(process.env.MONGODB_URL)
    app.listen(10005 , ()=>console.log('Server has started on port http://localhost:10005'))
    }catch(error){
        console.log(error);
    }
}

startServer();
