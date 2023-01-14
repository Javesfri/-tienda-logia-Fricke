import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import '../stylesheets/ItemList.css'




function ItemList({items}){
    console.log(items)
    return(
        <div className="item-list">
            {items ? items.map((item) => (
               <Link className="item-link" to={`/item/${item.id}`}><Item item={item} key={item.id}/></Link>
            )): <p>Cargando..</p>}
        </div>
    );
}

export default ItemList;