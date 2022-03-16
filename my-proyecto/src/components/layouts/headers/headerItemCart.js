import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cardContext"
import { CartPreview } from "../../cartWidget";



export const HeaderItemCart = () => {
    const { products, removeItem } = useContext(CartContext)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const handleCartButton = (event) => {
        event.preventDefault();
        return setIsCartOpen(!isCartOpen);
    };

    const handleRemove = (productId) => {
        return removeItem(productId);
    };

    return (
        <div className="cart">
            <div className="cart-info">
                <table>
                    <tbody>
                        <tr>
                            <td>No. of items</td>
                            <td>:</td>
                            <td>
                                <strong>{products.length}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>Sub Total</td>
                            <td>:</td>
                            <td>
                                <strong>0</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <a className="cart-icon" href="#" onClick={handleCartButton}>
                <img
                    className=""
                    src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                    alt="Cart"

                />

                <span className="cart-count">{products.length}</span>

            </a>
            <CartPreview isCartOpen={isCartOpen} />
        </div>
    )
}