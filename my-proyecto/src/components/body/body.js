import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import ItemListContainer from "../itemListContainer";

const Body = () => {
    return (
        <div className='row justify-content-center'>
            <CardComponent
                img={ItemListContainer.productData[0].img}
                title={ItemListContainer.productData[0].title}
                price={ItemListContainer.productData[0].price}
                desc={ItemListContainer.productData[0].desc}
            />

            <CardComponent
                img={ItemListContainer.productData[1].img}
                title={ItemListContainer.productData[1].title}
                price={ItemListContainer.productData[1].price}
                desc={ItemListContainer.productData[1].desc}
            />

            <CardComponent
                img={ItemListContainer.productData[2].img}
                title={ItemListContainer.productData[2].title}
                price={ItemListContainer.productData[2].price}
                desc={ItemListContainer.productData[2].desc}
            />
        </div>
    )
}

export default Body;