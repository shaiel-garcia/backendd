const express = require("express");
const productsRouter = require("./routers/products")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))



app.use('/api/productos', productsRouter);

app.listen(8080, () => {
    console.log("el servicio esta corriendo en el puerto 8080")
})