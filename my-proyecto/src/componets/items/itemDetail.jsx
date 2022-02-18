import React from "react";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/products/detail.css";
import { ItemCount } from "../items/itemCount"
import { CartContext } from "../context/cartContext";



export const ItemDetail = ({ product }) => {
    const [itemQuantity, setItemQuantity] = useState(0)
    const { addItem } = useContext(CartContext)

    return (
        <div className="card">
            <div className="product-imgs">
                <div className="img-display">
                    <div className="img-showcase">
                        <img src={product.image} alt="shoe image" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <h2 className="product-title">{product.name}</h2>
                <div className="product-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.7(21)</span>
                </div>
                <div className="product-price">
                    <p className="new-price">New Price: <span>{product.price}</span></p>
                </div>
                <div className="product-detail">
                    <h2>about this item: </h2>
                    <p>{product.description}</p>
                    <ul>
                        <li>Available: <span>{product.stock}</span></li>
                        <li>Category: <span>{product.category.name}</span></li>
                    </ul>
                </div>

                <div className="purchase-info">
                    <ItemCount stock={product.stock} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} />
                    <div>

                        <button onClick={() => addItem(product, itemQuantity)} className="btn btn--primary" >Agregar al carrito</button>


                    </div>

                </div>
            </div>
        </div>


    )

}