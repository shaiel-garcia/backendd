import React from "react";
import "./Footer.css"

//Imagenes

import github from "./../../../img/multimedia/github.svg"

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://github.com/shaiel-garcia" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
            </div>
            <p>Terra-Natural © 2021-2022 Copyright</p>
        </footer>
    )
}

export default Footer