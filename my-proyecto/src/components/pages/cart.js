import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/cardContext";
import { CartListContainer } from "../cart/cartListContainer";
import { CommonLayout } from "../layouts/cammonLayout";


export const Cart = () => {

    const { products } = useContext(CartContext)
    return (
        <CommonLayout>
            <CartListContainer products={products} />
        </CommonLayout>


    )

} 