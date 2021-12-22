import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cardwidget.css';

const CardWidget = ()=>{

    const {getCount} = useContext(CartContext)
    
    return(
        <div className="divImg">
           <Link to='/cart'> <img src='./images/cardwidget.png' alt="cardwidget" /> </Link>
            <p>{getCount()}</p>
        </div>
    )
}

export default CardWidget;