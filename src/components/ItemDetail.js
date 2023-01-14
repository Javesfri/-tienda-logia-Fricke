import React, { useContext } from "react";
import {useState} from "react"
import '../stylesheets/ItemDetail.css'
import ItemCount from './ItemCount'
import { CartContext } from "../context/CartContext";

function ItemDetail({item}){
    const {aniadirAlCarrito} =useContext(CartContext);

    const onAdd = (cant) =>{
        aniadirAlCarrito(item,cant);
    }
    return(
        <div className="item-detail-contenedor">
            <div className="item-name-contenedor">
                <h2 className="item-name">{item?.name}</h2>
            </div>
            <div className="item-image-features-contenedor">
                <div className="item-image-contenedor">
                <img className="item-image" src={item?.imageId} alt={"imagen de pc"}/>
                </div>
                <div className="item-features-contenedor">
                    <div className="item-features">
                        <h3 className="item-features-title">Descripcion</h3>
                        <p className="item-features-text">{item?.description}</p>
                    </div>
                    <p className="item-price">${item?.price}</p>
                    <p className="item-stock">Stock: {item?.stock}</p>
                    <div className="item-count" >
                        <ItemCount onAdd={onAdd} stock={item.stock} /> 
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;