import React from "react";
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <div className="Navegagor">
            <nav className="Navegagor">
                <ul className="nav nav-tabs Navegador" >
                    <li><CardWidget /></li>
                    <li className="nav-item">
                        <button className="nav-link navegador__a navegador__a--color navegador__diseño navegador__diseño--color">Inicio</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link navegador__a navegador__a--color navegador__diseño navegador__diseño--color">Vegetales</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link navegador__a navegador__a--color navegador__diseño navegador__diseño--color">Contacto</button>
                    </li>
                </ul>
            </nav>
        </div>
    )

};

export default NavBar;