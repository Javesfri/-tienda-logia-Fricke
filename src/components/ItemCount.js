import React, { useState } from "react";
import '../stylesheets/ItemCount.css'
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function ItemCount ({stock, onAdd,itenName}){
  const [contador, setContador]= useState(1);
  const agregarCantidad = () =>{
    if(contador < stock)
    {
      setContador(contador + 1);
    }
    else{
      alert("Stock Maximo")
    }
    
  }
  const disminuirCantidad = () =>{
    if(contador >1)
      setContador(contador -1);
  }

  const handleOnAdd = () =>{
    onAdd(contador);
    setContador(1);
  }

  return(
    <div className="item-count-contenedor">
      <div className="count-contenedor">
        <CiCircleMinus  
        className="icono-circulo"
        onClick={disminuirCantidad} />
        <div className="visor-cantidad">{contador}</div>
        <CiCirclePlus 
        className="icono-circulo"
        onClick={agregarCantidad} />
      </div>
      <div className="boton-contenedor">
        <button onClick={handleOnAdd} className="boton">Agregar al Carrito</button>
      </div>
      
    </div>
  );
}

export default ItemCount;