import React from "react";
import { Item } from "./item"

export const ItemList = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    )
}