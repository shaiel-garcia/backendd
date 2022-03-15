import React from "react";
import { ItemListContainerByCategory } from "../items/itemListContainerByCategory";
import { CommonLayout } from "../layouts/cammonLayout"


export const ProductsByCategory = () => {
    return (
        <CommonLayout>
            <ItemListContainerByCategory></ItemListContainerByCategory>
        </CommonLayout>
    )

} 