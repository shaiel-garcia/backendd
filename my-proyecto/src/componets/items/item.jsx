
import React from "react";
import { ItemBody } from "./itemBody";
import { ItemCount } from "./itemCount";
import { ItemImage } from "./itemImg";
import "./product.css";

export const Item = ({ product }) => {
    return (

        <div className="product">

            <ItemImage product={product} />


            <ItemBody product={product} />
            <ItemCount stock={product.stock} />
        </div>
    )

}