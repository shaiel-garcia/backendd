import React from "react";
import "./product.css";

export const ItemImage = ({ product }) => {
    return (
        <div className="product-image">
            <img src={product.image} alt={product.name} />
        </div>
    )
} 