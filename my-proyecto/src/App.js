import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./componets/pages/home";
import { ItemDetail } from "./componets/pages/itemDetail";
import './App.css';
import { ProductsByCategory } from "./componets/pages/productsByCategory";
import { Cart } from "./componets/pages/cart";
import { CartProvider } from "./componets/context/cartContext";



function App() {

    return (
        < CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/categories/:category" element={<ProductsByCategory />} />
                    <Route path="/item/:id" element={<ItemDetail />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );

}

export default App;




