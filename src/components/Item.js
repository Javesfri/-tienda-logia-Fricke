import React from "react";
import '../stylesheets/Item.css'

function Item({item}){
    return(
        <div className="item-container">
            <img className="item-image" src={item.imageId}alt={`Foto de ${item.name}`} />
            <h2 className="item-title">{item.name}</h2>
            <p className="item-description">{item.description}</p>
            <div className="item-stock-container">
                <p className="item-stock">Stock: {item.stock}</p>
            </div>
            
        </div>
    );
}

export default Item;