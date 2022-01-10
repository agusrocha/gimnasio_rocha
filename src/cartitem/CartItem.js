import React, { useContext} from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({item}) => {
const {removeItem}= useContext(CartContext);

    return (
        <>
            <div>
                <img src={item.img} alt={item.name} className="imgCart" />
            </div> 
            <h3> {item.name} </h3>
            <h3> Precio por unidad $ {item.price} </h3>
            <h3> Cantidad: {item.cantidad}  </h3>
            <h3> SubTotal: ${( item.price) *  (item.cantidad)} </h3>
            <button onClick={() => removeItem(item.id)}> X </button>        
        </>
    )
}

export default CartItem;