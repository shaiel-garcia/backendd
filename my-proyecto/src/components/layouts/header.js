import { Component } from "react";
import { HeaderItemCart } from "./headers/headerItemCart";
import { HeaderMenuLink } from "./headers/headerMenuLink"
import { categoriesItems } from "../../constans/cammons"
import { Logo } from "./headers/logo";
import "./navBar.css"
import "../../assets/scss/layouts/header.scss"

class Header extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <Logo />
                <HeaderMenuLink categories={categoriesItems} />
                <HeaderItemCart />
            </nav>
        )
    }

}

export default Header