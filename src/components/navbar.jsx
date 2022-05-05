import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navbar = (props) => {
    return (
        <div className="navbar navbar-expand-sm navbar-dark bg-danger">
            <div className="container-fluid">
                <p className="h1 navbar-text text-light">Lemme Complain!</p>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item navbar-text h4 text-light">
                            <Link to="/login">Login/Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default navbar;
