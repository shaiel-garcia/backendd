import React from "react";
import "../../assets/estilos/layouts/footer.scss"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p className="footer-links">
                <a
                    href="https://github.com/shaiel-garcia"
                    target="_blank"
                >
                    Github
                </a>
                <span> / </span>
                <a href="shaielgarcia@hotmail.com" target="_blank">
                    Necesitas contactarme?
                </a>
                <span> / </span>
            </p>
            <p>
                &copy; {currentYear} <strong>Veggies</strong> - Terra Natural
            </p>
        </footer>
    );
};

export default Footer;