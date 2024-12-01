const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.json('Hello World from Node API! Server started on port 3000');
})

mongoose.connect("mongodb+srv://islamkadyrbekov31:scZZjiOu3xgzcDkj@testdb.tq1zi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=TestDB").then(()=>{
    console.log("MongoDB Connected!");
    app.listen(3000, ()=>{
        console.log("Server started on port 3000");
    });
})
.catch((err)=>{
    console.error(err);
})