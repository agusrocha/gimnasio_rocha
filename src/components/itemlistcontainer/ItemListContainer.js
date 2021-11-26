import React, {useState} from 'react';
import ItemCount from '../itemcount/ItemCount';
import './Itemlistcontainer.css';

const ItemListContainer = (props)=>{
    const {label} = props;
    const [stock, setStock] = useState(15);
    
    const onAdd = (count)=>{
        setStock(stock - count);
        
        if (count <= stock)  {
            console.log(`se agregaron ${count} y quedan ${stock - count} en stock`);
        }        
    }

    return(
        <div>
            <h2>{label}</h2>
            <ItemCount onAdd={onAdd} initial={1} stock={15} />
        </div>
    )
}

export default ItemListContainer;