import React from 'react';
import './App.css';
import { NavBar } from './componets/navbar/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./componets/home/home";
import Cart from './componets/cart/cart';
import { CartProvider } from "react-use-cart";

const App = () => {
    return (
        <>

            <NavBar />
            <CartProvider>
                <Home />
                <Cart />
            </CartProvider>
        </>
    )
}

export default App;