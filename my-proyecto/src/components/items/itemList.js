import React from "react";
import Item from "../items/item";

const ItemList = ({ productos }) => {

    return (
        <div className='row justify-content-center'>
            {
                productos.map((productos) => (
                    <Item key={productos.id} props={productos}></Item>
                ))
            }
        </div>
    )
}

export default ItemList;