import React, {useState, useEffect} from 'react';
import ItemDetail from '../itemdetail/ItemDetail';
import { getItem } from '../../products';
import './Itemdetailcontainer.css';

const ItemDetailContainer = () => {
    
    const [products, setItem] = useState('');
    
    useEffect( ()=>{
        const article = getItem;
        article.then(article => {
            setItem(article);
        })
        return ( () => {
            setItem([])
        })
    }, [])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail products={products} />
        </div>
    )
};

export default ItemDetailContainer;

