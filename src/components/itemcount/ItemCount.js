import React, {useState} from "react";
import './Itemcount.css';

const ItemCount = ({stock,initial,onAdd})=>{
        
    const [count, setCount] = useState(initial);
    
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
        }
    };

    return(
        <div className="divCount">
            <button className="buttonCount" onClick={increase} >+</button>
            <button className="buttonCount" onClick={decrease}>-</button>
            <div>
                <button className="buttonUnidad" onClick={handleAdd}> {count} unidades </button>
            </div>
        </div>
    )
};

export default ItemCount;