import React from 'react';
import './Item.css';

const Item = ({products})=>{
        
    return (
        <div className='item'>
            <div>
                <h4> {products.name}</h4>
            </div>
            <img src={products.img} alt={products.name} className='imgItem' />
            <p>
                {products.price}
            </p>

        </div>
    )
}

export default Item;