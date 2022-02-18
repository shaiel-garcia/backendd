import React from "react";
import { CommonLayout } from "../layouts/commonLayout"
import { ItemListContainer } from "../items/itemListContainer";


export const Home = () => {
    return (
        <CommonLayout>
            <ItemListContainer></ItemListContainer>
        </CommonLayout>
    )

} 