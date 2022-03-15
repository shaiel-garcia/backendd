import React, { useState } from "react";
import "../button.css"



export const ItemCount = ({ stock, itemQuantity, setItemQuantity }) => {


    return (
        <div>
            <div style={{ marginBotton: 10 }}>
                <button disabled={itemQuantity <= 1} className="btn btn--primary" onClick={() => setItemQuantity(itemQuantity - 1)}>-</button>
                <span style={{ margin: 10, fontSize: "3rem" }}>{itemQuantity}</span>
                <button disabled={itemQuantity >= stock} className="btn btn--primary" onClick={() => setItemQuantity(itemQuantity + 1)}>+</button>

            </div >

        </div>
    )

}