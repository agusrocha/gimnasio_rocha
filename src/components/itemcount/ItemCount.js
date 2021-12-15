import React, {useState} from "react";
import './Itemcount.css';

const ItemCount = ({stock,initial,onAdd})=>{
        
    const [count, setCount] = useState(initial);
    //const [showCount, setShowCount] = useState(true);
    

    const increase = ()=>{
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrease = ()=>{
        if (count > 0) {
            setCount(count -1);
        }
    };

    const handleAdd = ()=>{
        if (stock > 0 ) {
            onAdd(count);
            //setShowCount(showCount)
        }
    };

    return(
        <div className="divCount">
            <button onClick={increase} >+</button>
                <span>Cantidad: {count}</span>
            <button onClick={decrease}>-</button>
            <div>
                <button onClick={handleAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
};

export default ItemCount;