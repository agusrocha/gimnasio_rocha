import React, {useContext} from 'react';
import { useState, useEffect } from 'react';
import CardWidget from '../cardwidget/CardWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';
//import { getCategories } from '../../products';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebase/firebase'
import { collection, getDocs } from 'firebase/firestore';


const NavBar = () =>{

    const {getCount} = useContext(CartContext)

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getDocs(collection(db, 'category')).then((querySnapshot) => {
            const categories = querySnapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setCategories(categories)
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
                
                    <div className='divLi'>
                        <Link to={'/'} className='li'> Productos </Link>
                        {categories.map(cat => <Link key={cat.id} className='li' to={`/category/${cat.id}`}> {cat.description} </Link>)}
                        
                    </div>
                {getCount() === 0 ? 
                <div style={{display:'none'}}>
                </div>        
                :
                <CardWidget/>  
                }  
            </div>
            
        </nav>
    )
};

export default NavBar;