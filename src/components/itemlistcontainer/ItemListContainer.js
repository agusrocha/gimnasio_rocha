import React, {useState, useEffect} from 'react';
import './Itemlistcontainer.css';
import ItemList from '../itemlist/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = (props)=>{
    const {label} = props;

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();
      
    useEffect( () => {
        if(!categoryId) {
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()} 
                })
                setProducts(products)
    
            })
        } else {
            getDocs(query(collection(db, 'items'), where('category', '==', categoryId))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()} 
                })
                setProducts(products);
            })
        }

        return(()=>{
            setProducts([])
        })
    }, [categoryId])

    return(
        <div className='divContainer'>
            <h2>{label}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;