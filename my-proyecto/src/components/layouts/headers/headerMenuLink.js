import React from "react";
import { NavLink } from "react-router-dom";


export const HeaderMenuLink = ({ categories }) => {

    return (
        <ul className="nav-menu">
            {categories.map((item) => {
                return (
                    <NavLink key={item.id} className="nav-links" to={`/categories/${item.slug}`}>
                        <li>
                            {item.name}
                        </li>
                    </NavLink>
                )
            })}
        </ul>
    )
}