import React from "react";
import { Item } from "./item"

export const ItemList = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <Item key={product.name} product={product} />
            ))}
        </div>
    )
}

export default ItemList;