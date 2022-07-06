//DATA
let dataProducts = [];

//CONTROLLERS
//Main page
export const mainController = (req, res) => {
    res.status(200).render('index', { dataProducts });
};

//Add a new product - GET
export const getFormNewProduct = (req, res) => {
    res.status(200).render('product');
};

//Add a new product - POST
export const addNewProduct = (req, res) => {
    let objectId = 0;
    const { nombre, price, url } = req.body;
    if (dataProducts.length == 0) {
        objectId = 1;
    } else {
        let arr = [];
        dataProducts.forEach(item => {
            arr.push(item.id);
        });

        const maxValue = Math.max(...arr);
        objectId = maxValue + 1;
    };

    let newProduct = {
        id: objectId,
        nombre,
        price: Number(price),
        url
    };

    dataProducts.push(newProduct);
    res.status(201).redirect('/productos/create');
};