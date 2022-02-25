import React from "react";
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from "./components/itemListContainer";



function App() {
    return (
        <div>

            <NavBar />
            <ItemListContainer greeting="Bienvenidos" />

        </div>
    )
}
export default App;


