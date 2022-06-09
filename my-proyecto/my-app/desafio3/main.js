const express = require("express");
const Container = require("../desafio2/main");
const app = express();


const container = new Container("productos.txt")

container.save({
    name: "fideos",
    price: "47",
    stock: "30"
})
container.save({
    name: "Arroz",
    price: "95",
    stock: "30"
})
container.save({
    name: "Galletitas",
    price: "160",
    stock: "60"
})
container.save({
    name: "cereales",
    price: "160",
    stock: "15"
})
container.save({
    name: "Tomate",
    price: "30",
    stock: "20"
})


app.get("/productos", function (req, res) {
    res.send(
        container.getAll()
    )
});

app.get("/productosRandom", function (req, res) {
    let items = container.getAll();
    let item = items[Math.floor(Math.random() * items.length)];
    res.send(
        item
    )
})

app.listen(8080, () => {
    console.log("el servicio esta corriendo en el puerto 8080")
})