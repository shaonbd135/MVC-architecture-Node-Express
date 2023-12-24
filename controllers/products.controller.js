const path = require("path");
const products = require("../models/products.model")

exports.getProducts = (req,res) => {
    filePath = path.join(__dirname + "/../views/productsInput.html");
    res.sendFile(filePath);
}

exports.saveProducts = (req,res) => {
    const name = req.body.name;
    const price = Number(req.body.price);

    const product = {
        name,
        price
    }

    products.push(product);
    
    res.status(201).json({
        success: "true",
        products
    })   
}