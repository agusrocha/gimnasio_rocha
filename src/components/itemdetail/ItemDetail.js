import React from 'react';
import './Itemdetail.css';

const ItemDetail = ({products})=>{
    return (
        <div className='itemDetail'>
            <picture className='itemDetailDiv'>
                <img src={products.img} alt={products.name} className='itemDetailImg'/>
            </picture>
            
            <div className='itemDetailDescription'>    
                <h5 className='itemDetailProducto'>
                    {products.name}
                </h5>
                <p className='itemDetailDescripcion'>
                    {products.descripcion}
                </p>
                <p className='itemDetailProductoPrice'>
                    {products.price}
                </p>
                <button> Agregar al carrito </button>
            </div>         
          </div>  
        
    )
}


export default ItemDetail;