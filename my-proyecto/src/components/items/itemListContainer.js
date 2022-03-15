import React from "react";
import { useState, useEffect } from 'react';
import { ItemList } from "./itemList";
import "./products.css"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import { async } from "@firebase/util";



const productList = [
    {
        "id": 1,
        "name": "Brocolli - 1 Kg",
        "price": 120,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
        "category": "vegetables",
        "stock": 20
    },
    {
        "id": 2,
        "name": "Cauliflower - 1 Kg",
        "price": 60,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
        "category": "vegetables",
        "stock": 20
    },
    {
        "id": 3,
        "name": "Cucumber - 1 Kg",
        "price": 48,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
        "category": "vegetables",
        "stock": 20
    },
    {
        "id": 4,
        "name": "Beetroot - 1 Kg",
        "price": 32,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
        "category": "vegetables",
        "stock": 20
    },
    {
        "id": 5,
        "name": "Carrot - 1 Kg",
        "price": 56,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg",
        "category": "vegetables",
        "stock": 20
    },
    {
        "id": 6,
        "name": "Tomato - 1 Kg",
        "price": 52,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
        "category": "vegetables",
        "stock": 20
    },
    {
        "id": 7,
        "name": "Capsicum - 1 Kg",
        "price": 30,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
        "category": "vegetables",
        "stock": 20
    },
    {
        "id": 8,
        "name": "Raspberry - 1 Kg",
        "price": 60,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
        "category": "Frutas",
        "stock": 20
    },
    {
        "id": 9,
        "name": "Mango - 1 Kg",
        "price": 30,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
        "category": "Frutas",

        "stock": 20
    },
    {
        "id": 10,
        "name": "Almonds - 1 Kg",
        "price": 30,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/almonds.jpg",
        "category": "frutos secos",
        "stock": 20
    },


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
    /* 
     useEffect(() => {
         let mounted = true
         task.then(result => {
            setProducts(result)
           }).then(result => {
             console.log(result)
           })
           .catch( err => {
             console.log(err)
           }).finally( result => {
             console.log("Su pedido ha finalizado")
             
           })
         return () => mounted = false;
       }, []);*/

    useEffect(() => {
        const getFromFirebase = async () => {

            const query = collection(db, "item");
            const snapshot = await getDocs(query);
            let result = []
            snapshot.forEach(doc => {
                result.push({ id: doc.id, ...doc.data() })
            })
            setProducts(result);
        }

        getFromFirebase()

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

