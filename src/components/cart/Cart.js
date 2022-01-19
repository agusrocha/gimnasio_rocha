import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import ContactForm from "../contactForm/ContactForm";
import CartItem from "../cartitem/CartItem";
import CheckOutOrder from "../checkoutorder/CheckOutOrder";
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
                })
            })
            setTimeout(()=>{
                clear()
            },1000)
        }
    } 

    if (processingOrder) {
        return (
            <div className="divCartCompra">
                <div>
                    <h2> Orden </h2>
                        <CheckOutOrder orderId={orderId}/>
                </div>
            </div>
    )}         

    return (
        <div className="divCart">
            <h1> Carrito </h1>
            {!processingOrder  && cart.map(p => <CartItem key={p.id} item={p}/>)}
            {(!processingOrder && cart.length) > 0 && <h3> Total: ${totalPrice()}</h3>}  
            {(!processingOrder && cart.length) > 0 && (<button className="buttonClear" onClick={() => clear()}> Eliminar productos del carrito </button>)}
            {(!processingOrder && cart.length) > 0 && <ContactForm setDatos={setDatos}/>}
            {(!processingOrder && cart.length) > 0 && (<button className="buttonCompra" onClick={() => confirmOrder()}> Confirmar compra </button>)}
            
            {cart.length === 0 && 
                <div className="divCarritoVacio">
                    <h5> No hay elementos </h5>
                    <Link to='/' className="linkVerProducto"> ⇒ Ver productos ⇐ </Link>
                </div>}
        </div>
    )
}
    
export default Cart; 