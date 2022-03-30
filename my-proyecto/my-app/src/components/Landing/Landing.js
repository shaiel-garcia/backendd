import React from "react";
import "./Landing.css"

import ItemListContainer from "../ProductCard/ItemListContainer/ItemListContainer";

const greeting = "Bienvenid@s a Terra-Natural"
const siteDesc = "Seleccioná el producto que mas te guste desde la lista y agregalo al carrito"

const Landing = ({ prodList }) => {
    return (
        <section className="mainLanding">
            <p>{greeting}</p>
            <p>{siteDesc}</p>
            <ItemListContainer prodList={prodList} />
        </section>
    )
}

export default Landing