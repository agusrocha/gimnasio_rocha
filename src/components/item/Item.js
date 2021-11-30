import React from 'react';
import './Item.css';

const Item = ({products}) => {
    return (
        <div className="item">
            <h4> {products.name}</h4>
            <img src={products.img} alt={products.name} className='imgTtem' />
            <p>
                {products.price}
            </p>
        </div>
        
    )
}

export default Item;
