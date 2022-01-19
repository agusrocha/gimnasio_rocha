import React, {createContext, useState} from 'react';
export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
  
    const addProducts = (item, count) => {
        const newProduct = {
            ...item,
            cantidad: count
        }

        if (!isInCart(item.id)) {
            setCart([...cart, newProduct])
        } else {
            const newProducts = cart.map(prod => {
                if(prod.id === item.id) {
                    const newProduct = {
                        ...prod,
                        cantidad: count
                    }
                    return newProduct
                }else {
                    return prod
                }
            })
            setCart(newProducts)
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
        return cart.reduce((acumulador, item) => acumulador + (item.price) * (item.cantidad), 0);
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id);
    }

    const removeItem = (id) => {
        setCart(cart.filter(p=> p.id !== id)) 
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