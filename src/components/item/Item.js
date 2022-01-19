import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({products}) => {
    return (
        <div className="item">
            <h4> {products.name}</h4>
            <img src={products.img} alt={products.name} className='imgItem' />
            <p>
               $ {products.price}
            </p>
            <Link to={`/item/${products.id}`} className='botonDetalle'> Ver detalle </Link>
        </div>
    )
}

export default Item;