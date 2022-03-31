import React from "react";
import "./ItemDetail.css"
// Components
import ItemCount from "../ItemCount/ItemCount";
// Img
import gif from "./../../../../img/products/gif.gif"
import "./../../../../img/img.css"


const ItemDetail = ({ item, addBasket, loading }) => {
    let img
    try {
        img = require(`./../../../../img/products/${item.name + item.id}.jpg`)
    } catch {
        img = gif
    }
    return (
        <div key={"Desc" + item.id} className="itemDetail" >
            <h3 className="descName">{item.name}</h3>
            <img src={img} alt={item.name} className="img" />
            <p><span className="tag">Categoria: </span>{item.categoria}.</p>
            <p><span className="tag">Precio: </span>${item.price}</p>
            <p><span className="tag">Stock: </span>{item.stock}</p>
            {loading && <ItemCount item={item} addBasket={addBasket} />}
        </div>
    )
}

export default ItemDetail;


