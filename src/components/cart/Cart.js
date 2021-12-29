import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import { db } from '../../services/firebase/firebase';
import { addDoc, collection } from "firebase/firestore";

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
                {cart.map(items => {
                    return <tr key={items.item.id}>
                        <td> {items.item.name} </td>
                        <td><img src={items.item.img} alt={items.item.name} className="imgCart" /></td>
                        <td> {items.item.price} </td>
                        <td> {items.cantidad} </td>
                        <td> ${( items.item.price) *  (items.cantidad)} </td>
                        <td> <button onClick={() => removeItem(items.item.id)}> X </button> </td>
                    </tr>
                })}

                </tbody>
            </table>
                <div> Total : $ {totalPrice()} </div>
                <button onClick={() => clear()}> Eliminar carrito </button>
        </div>
    )} 
    
    const confirmOrder = () => {
        const objOrder = {
            buyer : {name:'Bruno', phone: '1155617390', email: 'bruno@outlook.com'},
                item: [{name: cart.name, price: cart.price}],
                date:'11/5/2021',
                total: totalPrice()
                
            }

            addDoc(collection(db, 'orders', objOrder)).then(({id}) => {
                console.log(id);
            });

    } 
    
    return (
        <div>
                {cart.length === 0 ? renderEmptyCart() : renderCart()}
            </div>
        )
    }
    
    
    
    export default Cart; 