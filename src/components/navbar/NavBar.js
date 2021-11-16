import React from 'react';
import './Navbar.css';

const NavBar = () =>{
    return (
        <nav>
            <div className="divNav">
                <div className="divTitulo">
                    <h1>Breaking Goals</h1>
                </div>
                <li>
                    <a href="/#">Home</a>
                </li>
                <li>
                    <a href="/#">Funcional</a>
                </li>
                <li>
                    <a href="/#">Musculacion</a>
                </li>
            </div>

        </nav>
    )
};

export default NavBar;