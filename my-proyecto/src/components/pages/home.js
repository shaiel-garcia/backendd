import React from "react";
import { CommonLayout } from "../layouts/cammonLayout"
import { ItemListContainer } from "../items/itemListContainer";



export const Home = () => {
    return (
        <CommonLayout>
            <ItemListContainer></ItemListContainer>
        </CommonLayout>
    )

} 