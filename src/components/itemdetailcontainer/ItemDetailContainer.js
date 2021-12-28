import React, {useState, useEffect} from 'react';
import ItemDetail from '../itemdetail/ItemDetail';
import './Itemdetailcontainer.css';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/firebase'
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    
    const [products, setProducts] = useState('');
    const {id} = useParams();
    
    useEffect( ()=>{
        getDoc(doc(db, 'items', id)).then((querySnapshot) => {
            const products = {id: querySnapshot.id, ...querySnapshot.data()}
            setProducts(products)
        })
        return ( () => {
            setProducts([])
        })
    }, [id])
    
    return (
        <div className='itemDetailContainer'>
            <ItemDetail products={products} />
        </div>
    )
};

export default ItemDetailContainer;

