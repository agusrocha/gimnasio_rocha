import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import { db } from '../../services/firebase/firebase';
import { addDoc, collection, Timestamp, /* writeBatch, doc, getDoc */ } from "firebase/firestore";

const Cart = () => {
    const {cart, removeItem , clear, totalPrice} = useContext(CartContext);
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })
    
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
                        <td> $ {items.item.price} </td>
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
    
    const handleInputChange = (event) =>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const confirmOrder = (event) => {
        event.preventDefault();

        const objOrder = {
            buyer: datos, 
            items: cart,
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        };

          /* const batch = writeBatch(db);
          const outOfStock = []; */

          /* objOrder.items.forEach((prod) => {
              getDoc(doc(db, 'items'), prod.id).then((documentSnapshot) => {
                  if(documentSnapshot.data().stock >= prod.count) {
                      batch.update(doc(db, 'items', documentSnapshot.id), {
                          stock: documentSnapshot.data().stock - prod.count
                      })
                  } else {
                      outOfStock.push({id: documentSnapshot.id, ...documentSnapshot.data()})
                  }
              })
          })

          if(outOfStock.length === 0) {
              addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
                batch.commit().then(() => {
                console.log('el id es ' , id);

                })
              })
          } */
        
        addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
                console.log(id);
                
        });

            setTimeout(()=>{
                clear()
            },1000)

    } 

    return (
        <div>
            {cart.length === 0 ? renderEmptyCart() : renderCart()}
            
            <div>
                <h3>Complete el formulario</h3>
                <form onSubmit={confirmOrder}>
                    <div>
                        <input
                            placeholder="Ingrese Nombre"
                            type="text"
                            name="nombre"
                            onChange={handleInputChange}
                        ></input>
                    <div>
                        <input
                            placeholder="Ingrese Apellido"
                            type="text"
                            name="apellido"
                            onChange={handleInputChange}
                    ></input>
                        </div>

                    </div>
                    <div>
                        <button type="submit"> Enviar </button>
                    </div>
                </form>
            </div>

        </div>
        )
    }
    
    
    
    export default Cart; 