import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import ContactForm from "../contactForm/ContactForm";
import CartItem from "../../cartitem/CartItem";
import CheckOutOrder from "../../checkoutorder/CheckOutOrder";
import { db } from '../../services/firebase/firebase';
import { addDoc, collection, Timestamp,  writeBatch, doc, getDoc  } from "firebase/firestore";

const Cart = () => {
    const {cart, clear, totalPrice} = useContext(CartContext);
    const [orderId, setOrderId]= useState('');
    const [processingOrder, setProcessingOrder]= useState(false);
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: ''
    })
    
    const confirmOrder = () => {
        setProcessingOrder(true);
        
        const objOrder = {
            buyer: datos, 
            items: cart,
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        };

        const batch = writeBatch(db);
        const outOfStock = []; 

            objOrder.items.forEach((prod) => {
                getDoc(doc(db, 'items', prod.id)).then((documentSnapshot) => {
                    if(documentSnapshot.data().stock >= prod.cantidad) {
                      batch.update(doc(db, 'items', documentSnapshot.id), {
                          stock: documentSnapshot.data().stock - prod.cantidad
                      })
                    } else {
                      outOfStock.push({id: documentSnapshot.id, ...documentSnapshot.data()})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
                batch.commit().then(() => {
                setOrderId(id); 
                console.log(orderId);              
                })
            })
                 
            setTimeout(()=>{
                clear()
            },1000)
        }
    } 

    if (cart.length === 0) {
        return (
            <div className="divCarritoVacio">
                <h5> No hay elementos en el carrito</h5>
                <Link to='/' className="linkVerProducto"> Ver productos </Link>
                <CheckOutOrder/>
            </div>
        )
    }
    
    if (processingOrder) {
        return (
            <div className="divCart">
            <div>
                <h2> Se esta procesando su orden de compra</h2>
            </div>
            </div>
    )} 

    return (
        <>
            <h1> Carrito </h1>
            {!processingOrder  && cart.map(p => <CartItem key={p.id} item={p}/>)}
            {(!processingOrder && cart.length) > 0 && <h3> Total: ${totalPrice()}</h3>}  
            <button onClick={() => clear()}> Eliminar productos del carrito </button>
            {(!processingOrder && cart.length) > 0 && <ContactForm setDatos={setDatos}/>}
            {(!processingOrder && cart.length) > 0 && (<button onClick={() => confirmOrder()}> Confirmar compra </button>)}
            
            {(orderId) ? (
                <>
                    <CheckOutOrder orderId={orderId}/>
                </> ) :
                <p>{null}</p>
            }
        </>
        )
    }
    
    export default Cart; 