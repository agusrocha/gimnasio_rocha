import React from "react";
import { Link } from "react-router-dom";
import './Checkoutorder.css';

const CheckOutOrder = ({orderId}) => {
    return(
        <>
        <p className="tituloOrder">Su numero de compra es : </p>
        <p className="order"> {orderId} </p>
        <p className="subTitulo">Guarde este numero para el seguimiento del pedido</p>
        <Link to='/' className="buttonOrder"> Seguir comprando </Link>
        </>
    )
}

export default CheckOutOrder;