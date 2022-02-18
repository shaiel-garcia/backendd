import React from "react";
import "../../assets/css/layouts/_footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p className="footer-links">
                <a
                    href="https://github.com/k-iramain/tienda-react"
                    target="_blank"
                >
                    Github
                </a>
                <span> / </span>
                <a href="mailto:shaielgarcia@hotmail.com" target="_blank">
                    Necesitas contactarme?
                </a>
                <span> / </span>
            </p>
            <p>
                &copy; {currentYear} <strong>Terra Natural</strong> - Tienda vegana
            </p>
        </footer>
    );
};

export default Footer;