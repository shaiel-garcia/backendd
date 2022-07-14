import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

//TYPESCRIPT TYPES
type SingleProduct = {
    id: number,
    nombre: string,
    timestamp: number,
    codigo: string,
    url: string,
    precio: number,
    stock: number
};

type SingleCart = {
    id: number,
    timestamp: number,
    products: SingleProduct[]
};

//DATA
let cartsArr: SingleCart[] = JSON.parse(fs.readFileSync('./src/public/db/carts.json', 'utf-8'));
let productsArr: SingleProduct[] = JSON.parse(fs.readFileSync('./src/public/db/products.json', 'utf-8'));

//Post create new cart
export const createNewCart = (_req: Request, res: Response) => {
    let idCart = 0;
    if (cartsArr.length > 0) {
        let idAllCarts: any = [];

        cartsArr.forEach(cart => {
            idAllCarts.push(cart.id);
        });

        const maxId = Math.max(...idAllCarts);
        idCart = maxId + 1;
    } else {
        idCart = 1;
    };

    let newCart = {
        id: idCart,
        timestamp: Date.now(),
        products: []
    };

    cartsArr.push(newCart);
    fs.writeFileSync('./src/public/db/carts.json', JSON.stringify(cartsArr), 'utf-8');
    res.status(200).json({ id: idCart });
};

//Delete cart
export const deleteCart = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    if (cartsArr.length > 0) {
        if (!isNaN(id)) {
            //Carrito a eliminar
            const deleteCart = cartsArr.find(item => item.id === id);
            if (deleteCart) {
                const newArray = cartsArr.filter(cart => cart.id !== id);

                cartsArr = newArray;
                fs.writeFileSync('./src/public/db/carts.json', JSON.stringify(cartsArr), 'utf-8');
                res.status(200).send('Carrito eliminado!');
            } else {
                const err: any = new Error('Cart does not exist!');
                err.status = 400;
                next(err);
            };
        } else {
            const err: any = new Error('ID must be a number!');
            err.status = 400;
            next(err);
        };
    } else {
        const err: any = new Error('Must to register a cart to be able to delete it!');
        err.status = 400;
        next(err);
    };
};

//Get all products from cart
export const getAllProductsCart = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    if (cartsArr.length > 0) {
        if (!isNaN(id)) {
            const selectedCart = cartsArr.find(cart => cart.id == id);
            if (selectedCart) {
                res.status(200).json(selectedCart.products);
            } else {
                const err: any = new Error('Cart does not exist!');
                err.status = 400;
                next(err);
            };
        } else {
            const err: any = new Error('ID must be a number!');
            err.status = 400;
            next(err);
        };
    } else {
        const err: any = new Error('Must to register a cart to be able to see products!');
        err.status = 400;
        next(err);
    };
};

//POST add products to the cart
export const addProduct = (req: Request, res: Response, next: NextFunction) => {
    const id: number = Number(req.params.id);
    const idProduct: number = Number(req.params.idProduct);

    if (cartsArr.length > 0) {
        if (productsArr.length > 0) {
            if (!isNaN(id) && !isNaN(idProduct)) {
                const productSelected = productsArr.find(product => product.id == idProduct);
                const cartSelected = cartsArr.find(cart => cart.id == id);

                if (cartSelected) {
                    if (productSelected) {
                        cartSelected.products.push(productSelected);
                        console.log(cartSelected);
                        const otherCarts = cartsArr.filter(item => item.id !== id);
                        cartsArr = otherCarts;
                        console.log(otherCarts);

                        fs.writeFileSync('./src/public/db/carts.json', JSON.stringify(cartsArr), 'utf-8');
                        res.status(200).send('Producto anadido');
                    } else {
                        const err: any = new Error('Product does not exist!');
                        err.status = 400;
                        next(err);
                    };
                } else {
                    const err: any = new Error('Cart does not exist!');
                    err.status = 400;
                    next(err);
                };
            } else {
                const err: any = new Error('Both IDs must be a number!');
                err.status = 400;
                next(err);
            };
        } else {
            const err: any = new Error('Register products to be able to add them to the cart!');
            err.status = 400;
            next(err);
        };
    } else {
        const err: any = new Error('Register a cart to be able to add products to it!');
        err.status = 400;
        next(err);
    };
};

//DELETE a product by id cart and id product
export const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
    const id: number = Number(req.params.id);
    const idProduct: number = Number(req.params.idProduct);

    if (cartsArr.length > 0) {
        if (productsArr.length > 0) {
            if (!isNaN(id) && !isNaN(idProduct)) {
                const otherElementsArr = cartsArr.filter(cart => cart.id !== id);
                const cartSelected = cartsArr.find(item => item.id == id);
                if (cartSelected) {
                    const deleteProduct = cartSelected.products.find(item => item.id == idProduct);
                    if (deleteProduct) {
                        const otherProducts = cartSelected.products.filter(product => product.id !== idProduct);

                        cartSelected.products = otherProducts;
                        cartsArr = [...otherElementsArr, cartSelected];

                        fs.writeFileSync('./src/public/db/carts.json', JSON.stringify(cartsArr), 'utf-8');
                        res.status(200).send('Producto Eliminado');
                    } else {
                        const err: any = new Error('Product does not exist!');
                        err.status = 400;
                        next(err);
                    };
                } else {
                    const err: any = new Error('Cart does not exist!');
                    err.status = 400;
                    next(err);
                };
            } else {
                const err: any = new Error('Both IDs must be a number!');
                err.status = 400;
                next(err);
            };
        } else {
            const err: any = new Error('Register products to be able to delete them from the cart!');
            err.status = 400;
            next(err);
        };
    } else {
        const err: any = new Error('Register a cart to be able to delete products from it!');
        err.status = 400;
        next(err);
    };
};