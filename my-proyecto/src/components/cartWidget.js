import React, { useContext } from "react";
import { CartContext } from "./contexts/cardContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export const CartPreview = ({ isCartOpen }) => {
    const { products, removeItem } = useContext(CartContext)

    const checkout = () => {
        const itemsToBuy = products.map(item => {
            return {
                id: item.id,
                name: item.name ?? "No NAme",
                price: item.price,
                qty: item.quantity
            }
        })
        const order = { buyer: { email: "Test email" }, items: itemsToBuy, total: 1000 }
        addDoc(collection(db, "orders"), order)
            .then(doc => {
                alert("Orden completada con id", doc.id)
            })
            .catch(err => {
                console.log(err);
            })
    }
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
                                x
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="action-block">
                <button
                    onClick={checkout}
                    type="button"
                    className={`cart-preview ${products && products.length === 0 ? "disabled" : ""}`}

                >
                    PROCEED TO CHECKOUT
                </button>
            </div>
        </div>
    );
};