import React, {useState, useEffect} from 'react';
import ItemDetail from '../itemdetail/ItemDetail';
import { getProductsById } from '../../products';
import './Itemdetailcontainer.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const [products, setItem] = useState('');
    const {id} = useParams();
    
    useEffect( ()=>{
        getProductsById(id).then(article => {
            setItem(article);
        })
        return ( () => {
            setItem([])
        })
    }, [id])
    
    return (
        <div className='itemDetailContainer'>
            <ItemDetail products={products} />
        </div>
    )
};

export default ItemDetailContainer;

