import React, { useState } from "react";
import '../stylesheets/ItemCount.css'
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function ItemCount (){
  const [contador, setContador]= useState(0);
  const agregarCantidad = () =>{
    setContador(contador + 1);
  }
  const disminuirCantidad = () =>{
    if(contador >0)
      setContador(contador -1);
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
        <button className="boton">Agregar al Carrito</button>
      </div>
      
    </div>
  );
}

export default ItemCount;