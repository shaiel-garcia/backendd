import React, { useState } from "react";
import "../assets/button.css"



export const ItemCount = ({ stock, name }) => {
    const [itemsQty, setItemQty] = useState(1);

    return (
        <div>
            <div style={{ marginBotton: 10 }}>
                <button disabled={itemsQty <= 1} className="btn btn--primary" onClick={() => setItemQty(itemsQty - 1)}>-</button>
                <span style={{ margin: 10, fontSize: "3rem" }}>{itemsQty}</span>
                <button disabled={itemsQty >= stock} className="btn btn--primary" onClick={() => setItemQty(itemsQty + 1)}>+</button>

            </div >
            <div>
                <button className="btn--medium">Agregar a carrito</button>
            </div>
        </div>
    )

}