import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ItemList } from "./itemList";
import { productList } from "../../constants/product"
import "./products.css"


const task = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productList.length > 0) {
                console.log(category)
                let products = productList.filter(
                    (element) => {
                        return element.category.slug === category
                    }
                )
                console.log(products)
                resolve(products)
            } else {
                reject("En estos momentos no podemo procesar tu pedido")
            }
        }, 2000)

    })
}



export const ItemListContainerByCategory = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        let mounted = true
        task(category).then(result => {
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
                <ItemList products={products} />
            </div>
        </div>
    )

}