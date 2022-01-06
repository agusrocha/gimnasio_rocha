import React, {useContext, useState} from 'react';
import ItemCount from '../itemcount/ItemCount';
import './Itemdetail.css';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';

const ItemDetail = ({products})=>{

    const {addProducts} = useContext(CartContext)

    const [stock, setStock] = useState(15);
    const [showCount, setShowCount] = useState(0);

      
    const onAdd = (count)=>{
        setStock(stock - count);
        
        if (count <= stock)  {
            setShowCount(count);
        }        
    }
        
    const purchase = () => {
        addProducts (products, showCount)
    }
    return (
        products.length !== 0 ? (
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
                       $ {products.price}
                    </p>
                    {/* <p>
                        Stock: {products.stock}
                    </p> */}
                    { showCount === 0 ?
                    <ItemCount onAdd={onAdd} initial={1} stock={15}/>
                    :
                    <>
                    <button onClick={purchase}  className='carrito'> Agregar al carrito </button>
                    <Link to={'/cart'}> Ir al carrito </Link>
                    </>}
                    
                </div>         
            </div>  
            ) : (
                <div className='cargando'> Cargando...</div>
            )
    )
}


export default ItemDetail;