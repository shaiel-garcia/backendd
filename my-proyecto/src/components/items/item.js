import React from "react";
import { Link, NavLink } from "react-router-dom"
import { ItemBody } from "./itemBody";
import { ItemCount } from "./itemCount";
import { ItemImage } from "./itemImage";
import "./product.css";

export const Item = ({ product }) => {
    return (

        <div className="product">
            <Link to={`item/${product.id}`}>
                <ItemImage product={product} />
            </Link>

            <ItemBody product={product} />
            <ItemCount stock={product.stock} />
        </div>
    )

}



export default Item;