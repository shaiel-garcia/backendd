var Container = require("../container")
var express = require('express');
var router = express.Router();

let container = new Container();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function (req, res) {
    res.status(200).send(container.getAll());
});
// define the about route
router.get('/:id', function (req, res, next) {
    let product = container.getById(req.params.id)
    if (!product) {
        res.status(404).send('Error: producto no encontrado')
    }
    res.status(200).send(product);
});

router.post('/', function (req, res) {
    console.log(req.body)
    let product = container.create(
        req.body.title,
        req.body.price,
        req.body.image
    );
    res.status(201).send({ id: product })
});

router.put('/:id', function (req, res) {
    let product = container.getById(req.params.id)
    if (!product) {
        res.status(404).send('Error: producto no encontrado')
    }
    let updateProduct = container.update(
        req.params.id,
        req.body.title,
        req.body.price,
        req.body.image
    );
    res.status(200).send(updateProduct)
});

router.delete('/:id', function (req, res) {
    let product = container.getById(req.params.id)
    if (!product) {
        res.status(404).send('Error: producto no encontrado')
    }
    res.status(204).send(container.deleteById(req.params.id));
});

module.exports = router;