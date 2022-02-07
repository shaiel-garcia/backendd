import React from "react";

export const ItemBody = ({ product }) => {
    return (
        <div>
            <h4 className="product-name">{product.name}</h4>
            <p className="product-price">$ {product.price}</p>
        </div>
    )
}