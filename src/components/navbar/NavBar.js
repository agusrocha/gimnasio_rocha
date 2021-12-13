import React from 'react';
import { useState, useEffect } from 'react';
import CardWidget from '../cardwidget/CardWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { getCategories } from '../../products';


const NavBar = () =>{

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(cat => {
            setCategories(cat);
        })
        return () => {
            setCategories([])
        }
    }, [])

    return (
        <nav>
            <div className="divNav">
                <div className="divTitulo">
                    <Link to={'/'} className='titulo'>Breaking Goals</Link>
                </div>
                
                    {/* <li>
                        <a href="/#">Home</a>
                    </li>
                    <li>
                        <a href="/#">Funcional</a>
                    </li>
                    <li>
                        <a href="/#">Musculacion</a>
                    </li> */}
                    <div className='divLi'>
                        <Link to={'/'} className='li'> Productos </Link>
                        {categories.map(cat => <Link key={cat.id} className='li' to={`/category/${cat.id}`}> {cat.description} </Link>)}
                        
                    </div>
                  
                <CardWidget/>  
            </div>
            
        </nav>
    )
};

export default NavBar;