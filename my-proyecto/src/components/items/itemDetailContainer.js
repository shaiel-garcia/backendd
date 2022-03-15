import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { ItemDetail } from "../items/itemDetail";
import { productList } from "../../constans/products"
import { collection, getDocs, query, getDoc, doc } from "firebase/firestore"
import { db } from "../firebase"
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
    /*
        useEffect(() => {
            let mounted = true
            taskFilterProduct(id).then(result => {
                setProductDetail(result)
                console.log(productDetail)
              }).then(result => {
                console.log(result)
              })
              .catch( err => {
                console.log(err)
              })
            return () => mounted = false;
         }, []);*/

    useEffect(() => {
        const getFromFirebase = async () => {

            const docRef = doc(db, "item", id)
            const docSnapshot = await getDoc(docRef);

            let pd = [{ id: docSnapshot.id, ...docSnapshot.data() }]
            console.log(pd)
            setProductDetail(pd)
        }

        getFromFirebase()
    }, [])

    return (
        <div className="card-wrapper">
            {productDetail.length > 0 &&
                <ItemDetail product={productDetail[0]}></ItemDetail>
            }

        </div>
    )

}

