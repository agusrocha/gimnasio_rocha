import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
  
    const addProducts = (items, count) => {
        const flag= isInCart(items);
            
        if (flag) {
            let repeatedProduct = cart.find (e=>e.item === items);
            repeatedProduct.cantidad += count;
            let cartWithoutrPeating= cart.filter (e => e.item !== items);
            setCart([...cartWithoutrPeating, repeatedProduct]);
        }else {
            setCart([...cart, {item: items, cantidad: count}])
        }
    }
    
    const getCount = () => {
        let subTotal= 0;
        cart.forEach(elemento =>{
            subTotal += elemento.cantidad;
        })
        return subTotal;
    }

    const totalPrice = () => {
        return cart.reduce((acumulador, item) => acumulador + (item.item.price) * (item.cantidad), 0);
    }

    const isInCart = (item) => {
        return cart.some(p => p.item === item);
    }

    const removeItem = (id) => {
        setCart(cart.filter(p=> p.item.id !== id)) 
    }
    
    const clear = () => {
        setCart([]);
    }
    
        return (
        <CartContext.Provider value={{
            cart, addProducts, isInCart , clear, removeItem, getCount, totalPrice
        }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;