import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { CartListContainer } from "../cart/cartListContainer";
import { CommonLayout } from "../layouts/cammonLayouts";


export const Cart = () => {
    const { products } = useContext(CartContext)
    return (
        <CommonLayout>
            <CartListContainer products={products} />
        </CommonLayout>


    )

} 