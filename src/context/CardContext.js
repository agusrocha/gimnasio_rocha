import React, {createContext, useState} from 'react';

export const CardContext = createContext();

const CardContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
        
    const addProducts = (products, count) => {
        const flag= isInCart(products);
            
        if (flag) {
            let repeatedProduct = cart.find (e=>e.item === products);
            repeatedProduct.cantidad += count;
            let cartWithoutrPeating= cart.filter (e => e.item !== products);
            setCart([...cartWithoutrPeating, repeatedProduct]);
        }else {
            setCart([...cart, {item: products, cantidad: count}])
        }
    }
    console.log(cart);
    
    const isInCart = (item) => {
        return cart.some(p => p.item === item);
    }

    const removeItem = (id) => {
        setCart(cart.filter((p) => p.id !==id));
    }

    const clear = () => {
        setCart([]);
    }
    
        return (
        <CardContext.Provider value={{
            addProducts, isInCart , clear, removeItem
        }} >
            {children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;