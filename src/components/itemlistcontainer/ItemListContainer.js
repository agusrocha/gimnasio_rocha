import React, {useState, useEffect} from 'react';
import ItemCount from '../itemcount/ItemCount';
import './Itemlistcontainer.css';
import ItemList from '../itemlist/ItemList';
import { getProducts } from '../../products';

const ItemListContainer = (props)=>{
    const {label} = props;
    const [stock, setStock] = useState(15);

    const [products, setProducts] = useState([]);
    
    const onAdd = (count)=>{
        setStock(stock - count);
        
        if (count <= stock)  {
            console.log(`se agregaron ${count} y quedan ${stock - count} en stock`);
        }        
    }

    useEffect( () => {
        const list = getProducts;
        list.then(list=>{
            setProducts(list)
        })
        return(()=>{
            setProducts([])
        })
    }, [])

    return(
        <div>
            <h2>{label}</h2>
            <ItemList products={products} />
            <ItemCount onAdd={onAdd} initial={1} stock={15} />
        </div>
    )
}

export default ItemListContainer;