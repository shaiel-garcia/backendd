import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { ItemDetail } from "../items/itemDetail";
import { productList } from "../../constants/product"
import "./products.css"

const taskFilterProduct = (itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productList.length > 0) {
                console.log(productList)
                console.log(itemId)
                let product = productList.filter(
                    (element) => {
                        return element.id == itemId
                    }
                )
                console.log(product)
                resolve(product)


            } else {
                reject("En estos momentos no podemo procesar tu pedido")
            }
        }, 2000)

    })
}


export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        let mounted = true
        taskFilterProduct(id).then(result => {
            setProductDetail(result)
            console.log(productDetail)
        }).then(result => {
            console.log(result)
        })
            .catch(err => {
                console.log(err)
            })
        return () => mounted = false;
    }, []);

    return (
        <div className="card-wrapper">
            {productDetail.length > 0 &&
                <ItemDetail product={productDetail[0]}></ItemDetail>
            }

        </div>
    )

}