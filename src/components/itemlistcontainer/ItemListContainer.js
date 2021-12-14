import React, {useState, useEffect} from 'react';
import './Itemlistcontainer.css';
import ItemList from '../itemlist/ItemList';
import { getFilterCategory, getProducts } from '../../products';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props)=>{
    const {label} = props;

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();
    
    useEffect( () => {
        const list = getProducts();
        list.then(list=>{
            setProducts(list)
        })
        return(()=>{
            setProducts([])
        })
    }, [])

    useEffect (() => {
        getFilterCategory(categoryId).then(cat => {
            setProducts(cat);
        })
        
        return (() => {
            setProducts([]);
        })
    }, [categoryId])

    return(
        <div>
            <h2>{label}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;