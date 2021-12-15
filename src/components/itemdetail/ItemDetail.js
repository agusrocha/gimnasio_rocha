import React, {useState} from 'react';
import ItemCount from '../itemcount/ItemCount';
import './Itemdetail.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({products})=>{

    const [stock, setStock] = useState(15);
    const [showCount, setShowCount] = useState(0);
    
    const onAdd = (count)=>{
        setStock(stock - count);
        
        if (count <= stock)  {
            console.log(`se agregaron ${count} y quedan ${stock - count} en stock`);
            setShowCount(count);
        }        
    }
        
    console.log(showCount);
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
                        {products.price}
                    </p>
                    <p> Stock: {products.stock}un.</p>
                    { showCount === 0 ?
                    <ItemCount onAdd={onAdd} initial={1} stock={15}/>
                    :
                    <Link to={'/cart'} className='carrito'> Ir al carrito </Link>}
                </div>         
            </div>  
            ) : (
                <div className='cargando'> Cargando...</div>
            )
    )
}

export default ItemDetail;