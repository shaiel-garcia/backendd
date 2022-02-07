import React from "react";
import { ItemBody } from "./itemBody";
import { ItemCount } from "./itemCount";
import "./product.css";

export const Item = ({ product }) => {
    return (

        <div className="product">
            <ItemBody product={product} />
            <ItemCount stock={product.stock} />
        </div>
    )

}