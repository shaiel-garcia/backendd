import React from "react";
import { Cart } from "./cart";

export const CartListContainer = ({ products }) => {

    return (
        <div>
            {
                products.map(
                    (item) => {
                        <Cart item={item} />
                    }
                )
            }
        </div>
    )
}