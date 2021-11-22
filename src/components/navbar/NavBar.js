import React from 'react';
import CardWidget from '../cardwidget/CardWidget';
import './Navbar.css';

const NavBar = () =>{
    return (
        <nav>
            <div className="divNav">
                <div className="divTitulo">
                    <h1>Breaking Goals</h1>
                </div>
                <div className="divLi">
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
                <CardWidget/>  
            </div>
            
        </nav>
    )
};

export default NavBar;