import React from "react";
import { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({children}) =>{
    const [carrito, setCarrito]=useState([]);
    const aniadirAlCarrito =(item, cantidad) =>{
        if(estaEnCarrito(item.id)){
            const nuevoCarrito = carrito.map((itemCarrito) =>{
                if(itemCarrito.id === item.id){
                    itemCarrito.cantidad+=cantidad;
                }
                return itemCarrito;
            })
            setCarrito(nuevoCarrito)
        }
        else{
            const nuevoItem={...item, cantidad};
            setCarrito([...carrito,nuevoItem]);
            
        }
    }

    const totalItemsCarrito = () =>{
        let cant=0;
        carrito.map(item => cant += item.cantidad);
        /* cant+=parseInt(item.cantidad) ;*/
        return cant;

    }

    const totalPrecioCarrito = ()=>{
        let total=0;
        carrito.map(item => total+= item.price*item.cantidad);
        return total;
        
    }

    const vaciarCarrito = () =>{
        setCarrito([])
    }

    const estaEnCarrito = (id) =>{
        return carrito.some((item) => item.id===id)
        

    }
    const eliminarItemCarrito =(id) =>{
        const carritoFiltrado= carrito.filter(item => item.id != id);
        setCarrito(carritoFiltrado);

    }




    return(
        <CartContext.Provider value={{totalItemsCarrito, aniadirAlCarrito,totalPrecioCarrito,vaciarCarrito,carrito,eliminarItemCarrito }}>{children}</CartContext.Provider>
    )
}

export  {CartProvider, CartContext};