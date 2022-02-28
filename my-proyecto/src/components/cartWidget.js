import React, { useContext } from "react";
import { CartContext } from "./contexts/cartContext";


export const CartPreview = ({ isCartOpen }) => {
    const { products, addItem, removeItem, clear, isInCart } = useContext(CartContext)

    return (
        <div className={`cart-preview ${isCartOpen ? "active" : ""}`}>
            <ul className="cart-items">
                {products.map((product) => {
                    return (
                        <li className="cart-item" key={product.name}>
                            <img className="product-image" src={product.image} />
                            <div className="product-info">
                                <p className="product-name">{product.name}</p>
                                <p className="product-price">{product.price}</p>
                            </div>
                            <div className="product-total">
                                <p className="quantity">
                                    {`${product.quantity} ${product.quantity > 1 ? "unds." : "und."
                                        }`}
                                </p>
                                <p className="amount">{product.quantity * product.price}</p>
                            </div>
                            <button
                                className="product-remove" onClick={() => removeItem(product.id)}
                            >
                                ×
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="action-block">
                <button
                    type="button"
                    className={`cart-preview ${products && products.length === 0 ? "disabled" : ""}`}

                >
                    PROCEED TO CHECKOUT
                </button>
            </div>
        </div>
    );
};