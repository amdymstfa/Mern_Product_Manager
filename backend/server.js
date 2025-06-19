import express from 'express' ;
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();

const app = express();
const port = 5000 ;

// app.get('/', (req, res) => {
//     res.send("Server is ready to run");
// })

// accept json file for body request
app.use(express.json());
app.post('/api/products', async (req, res) => {
    // send datas to the data bases
    const product = req.body ;

    // check if datas are correctly sent 
    if (!product.name || !product.price || !product.image){
        res.status(400).json({
            success : false,
            message : "Please provide all fields"
        });
    }

    // in the opposite case 
    const newProduct = new Product(product);

    // handdle response or failure 
    try {
        await newProduct.save();
        res.status(201).json({
            success : true,
            data : newProduct
        });
    } catch (error) {
        console.error(`Eror on create product : ${error.message}`);
        res.status(500).json({
            success : false,
            message : "Server error"
        });
    }
});
app.listen(port, ()=>{
    connectDB();
    console.log(`server start on http://localhost:${port}`);
});