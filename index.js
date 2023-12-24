const express = require("express");

const userRouter = require("./routes/users.route");
const productRouter = require("./routes/product.route");

//CORS

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use("/api/users",userRouter);
app.use("/api/users",productRouter);

app.use((req,res,next) => {
    res.status(404).json({
        message: "resource not found ! 404 "
    })
}) 


app.listen(PORT , () => {
    console.log(`Server is running on ${PORT}`);
})
