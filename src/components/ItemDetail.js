import React from "react";
import '../stylesheets/ItemDetail.css'
import ItemCount from './ItemCount'

function ItemDetail({item}){
    return(
        <div className="item-detail-contenedor">
            <div className="item-name-contenedor">
                <h2 className="item-name">{item?.name}</h2>
            </div>
            <div className="item-image-features-contenedor">
                <div className="item-image-contenedor">
                <img className="item-image" src={require(`../images/${item.id ==undefined ? item.id="0":item.id}.png`)} alt={"imagen de pc"}/>
                </div>
                <div className="item-features-contenedor">
                    <div className="item-features">
                        <h3 className="item-features-title">Descripcion</h3>
                        <p className="item-features-text">{item?.description}</p>
                    </div>
                    <p className="item-price">${item?.price}</p>
                    <p className="item-stock">Stock: {item?.stock}</p>
                    <div className="item-count" >
                        <ItemCount /> 
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;