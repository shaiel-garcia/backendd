import { Component } from "react";
import { HeaderItemCart } from "./headers/headerItemCart";
import { HeaderMenuLink } from "./headers/headerMenuLink"
import { categoriesItems } from "../../constants/commons"
import { Logo } from "./headers/logo";
import "./NavBar.css";
import "../../assets/css/layouts/_header.css"

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

