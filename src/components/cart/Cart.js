import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.css';

const Cart = () => {
    const {cart, removeItem , clear, totalPrice} = useContext(CartContext);
    
    const renderEmptyCart = () => {
        return (
            <div className="divCarritoVacio">
                <h5> No hay elementos en el carrito</h5>
                <Link to='/' className="linkVerProducto"> Ver productos </Link>
            </div>
        )
    }
    
    const renderCart = () => {
        return (
            <div className="divCart">
            <div>
                <h2> Mi carrito</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <td> Producto </td>
                        <td> Foto </td>
                        <td> Precio x un. </td>
                        <td> Cantidad </td>
                        <td> Subtotal </td>
                    </tr>
                </thead>

                <tbody>
                {cart.map(producto => {
                    return <tr key={producto.item.id}>
                        <td> {producto.item.name} </td>
                        <td><img src={producto.item.img} alt={producto.item.name} className="imgCart" /></td>
                        <td> {producto.item.price} </td>
                        <td> {producto.cantidad} </td>
                        <td> ${(parseFloat( producto.item.price) * parseFloat (producto.cantidad)).toFixed(3)} </td>
                        <td> <button onClick={() => removeItem(producto.item.id)}> X </button> </td>
                    </tr>
                })}

                </tbody>
            </table>
                <div> Total : $ {totalPrice().toFixed(3)} </div>
                <button onClick={() => clear()}> Eliminar carrito </button>
        </div>
    )} 
    
    return (
        <div>
            {cart.length === 0 ? renderEmptyCart() : renderCart()}
        </div>
    )
}

export default Cart; 