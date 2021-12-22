import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

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
    
    const getCount = () => {
        let subTotal= 0;
        cart.forEach(elemento =>{
            subTotal += elemento.cantidad;
        })
        return subTotal;
    }

    const totalPrice = () => {
        return cart.reduce((acumulador, item) => acumulador + (parseFloat(item.item.price) * parseFloat(item.cantidad)), 0);
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