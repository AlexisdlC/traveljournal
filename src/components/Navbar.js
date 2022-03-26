import React from "react"
import worldIcon from "../images/earth-americas-solid.svg"

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav--image" src={worldIcon} />
            <h3 className="nav--title">my travel journal.</h3>
        </nav>
    )
}