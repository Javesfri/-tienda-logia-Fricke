import React, { useContext, useState } from "react";
import "../stylesheets/Checkout.css"
 import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";


const Checkout = () =>{
    const {carrito,totalPrecioCarrito,vaciarCarrito} =useContext(CartContext);
    const [id,setId]=useState()
    const [form, setForm] =useState({
        name: "",
        email: "",
        phone: "",
    });

    const changeHandler = (ev) =>{
        const {value,id} =ev.target;
        setForm({...form,[id]:value})
    }



    const submitHandler =(ev) =>{
        ev.preventDefault();
        const db=getFirestore();
        const ordersCollection=collection(db,"orders");


        const itemsCompra = carrito.map((item)=>({
            id:item.id,
            name:item.name,
            price:item.price,
            cantidad: item.cantidad,
            total: item.price*item.cantidad,
        }))



        const ordenCompra={
            buyer:{
                name: form.name,
                email: form.email,
                phone: form.phone
            },
            items:itemsCompra,
            total: totalPrecioCarrito(),
        }
        
        addDoc(ordersCollection,ordenCompra).then(snapshot =>setId(snapshot.id))
    }


    const handleVolver=()=>{
        vaciarCarrito();
        setId();
    }
        


    

    return(
        <div className="checkout-contenedor">
            <div className="checkout-titulo">Checkout</div>
            {id ?<div><h2>Compra Exitosa</h2><h3>ID: {id}<Link to={"/"}><button onClick={handleVolver}>Volver</button></Link></h3></div> : carrito.length===0 ? <div>CarritoVacío</div> :
            <div className="form-detail-contenedor">
            <form className="checkout-form">
                <label htmlFor="name">Nombre</label>
                <input type="emai" value={form.name} onChange={changeHandler} className="form-input" id="name" placeholder="Nombre y Apellido" required />
                <label htmlFor="email">Mail</label>
                <input type="email" value={form.email} onChange={changeHandler} className="form-input" id="email" placeholder="Email" required />
                <label htmlFor="tel">Numero Tel</label>
                <input type="phone" value={form.phone} onChange={changeHandler} className="form-input" id="phone" placeholder="Numero de Celular" required />
                <button onClick={submitHandler} className="button-1" type="submit">Pagar</button>
            </form>
            <div className="checkout-detail">
                <h3 className="orden">Tu Orden</h3>
                {carrito.map(item=>(
                    <div className="checkout-item">
                        <h4>{item.name}</h4>
                        <h4>x{item.cantidad}</h4>
                        <h4>{item.cantidad*item.price}</h4>
                    </div>
                ))}
                <div className="checkout-total">
                    <h4>Total</h4>
                    <h4>{totalPrecioCarrito()}</h4>
                </div>
            </div>
        </div> }
        </div>
    )
}
export default Checkout; 