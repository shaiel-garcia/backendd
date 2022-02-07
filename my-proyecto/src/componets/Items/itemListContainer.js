import React from "react";
import { useState, useEffect } from 'react';
import { ItemList } from "./itemList";
import "./products.css"



const productList = [
    {
        "id": 1,
        "name": "Brocolli - 1 Kg",
        "price": 120,

        "category": "vegetables",
        "stock": 20
    },
    {
        "id": 2,
        "name": "Cauliflower - 1 Kg",
        "price": 60,

        "category": "vegetables",
        "stock": 20
    },
    {
        "id": 3,
        "name": "Cucumber - 1 Kg",
        "price": 48,

        "category": "vegetables",
        "stock": 20
    },
    {
        "id": 4,
        "name": "Beetroot - 1 Kg",
        "price": 32,

        "category": "vegetables",
        "stock": 20
    },
    {
        "id": 5,
        "name": "Carrot - 1 Kg",
        "price": 56,

        "category": "vegetables",
        "stock": 20
    }
]

const task = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (productList.length > 0) {
            resolve(productList)
        } else {
            reject("En estos momentos no podemo procesar tu pedido")
        }
    }, 2000)

})



export const ItemListContainer = ({
    children,
    greeting,


}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        let mounted = true
        task.then(result => {
            setProducts(result)
        }).then(result => {
            console.log(result)
        })
            .catch(err => {
                console.log(err)
            }).finally(result => {
                console.log("Su pedido ha finalizado")

            })
        return () => mounted = false;
    }, []);

    return (
        <div className="products-wrapper">
            <div className="products">
                {greeting}
                <ItemList products={products} />
            </div>
        </div>
    )

}