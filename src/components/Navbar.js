import logo from "../images/globe.jpg";
import React from "react";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo-globe" />
            <p>my travel journal</p>
        </nav>
    )
}