import React from "react";
import { ItemListContainerByCategory } from "../items/itemListContainerByCategory";
import { CommonLayout } from "../layouts/commonLayout"


export const ProductsByCategory = () => {
    return (
        <CommonLayout>
            <ItemListContainerByCategory></ItemListContainerByCategory>
        </CommonLayout>
    )

} 