import React from 'react';
import './Itemlistcontainer.css';

const ItemListContainer = (props)=>{
    const {label} = props;
    
    return(
        <h2>{label}</h2>
    )
}

export default ItemListContainer;