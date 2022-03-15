import React from "react";
import Header from "./header";
import Footer from "./footer";

export const CommonLayout = ({ children }) => {
    return (
        <div className="container common-layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};