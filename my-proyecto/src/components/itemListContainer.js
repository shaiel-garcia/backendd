
import React, { useState, useEffect } from 'react';
import ItemList from './items/itemList';
import Frutas from './utils/utils';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const promiseProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Frutas)
            }, 2000)
        })

        promiseProductos
            .then((res) => { setProductos(res); })
            .catch((error) => {
                console.log(error)
            })
        console.log(productos);
    }, [productos])



    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList productos={productos}></ItemList>
        </div>
    )


}

export default ItemListContainer;