import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../context/Context";


function Navbar() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
        setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <Link className="nav__brand" to="/">Mbeats</Link>
            <ul className={active}>
            <li className="nav__item">
                <Link className="link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav__item">
                <Link className="link" to="/projects">Projects</Link>
            </li>
            <li className="nav__item">
                <Link className="link" to="/about">about</Link>
            </li>
            <li className="nav__item" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
            
            
        </ul>
        <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        </nav>
    );
}

export default Navbar;