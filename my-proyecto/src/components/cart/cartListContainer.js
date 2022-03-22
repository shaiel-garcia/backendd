import React from "react";
import { Cart } from "./cart";

export const CartListContainer = ({ products }) => {

    return (
        <div>
            {
                products.map(
                    (item) => {
                        <Cart key={item.id} item={item} />
                    }
                )
            }
        </div>
    )
}