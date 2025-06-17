import express from 'express' ;
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const port = 3000 ;

app.get('/products', (req, res) => {
    res.send("Server is ready to run");
})
app.listen(port, ()=>{
    connectDB();
    console.log(`server start on http://localhost:${port}`);
});