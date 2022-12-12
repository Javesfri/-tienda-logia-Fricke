import React, {useState, useEffect} from "react";
import '../stylesheets/ItemDetailContainer.css'
import ItemDetail from './ItemDetail'
import items from '../items.json'
import { useParams } from "react-router-dom";




function ItemDetailContainer(){
  const {id} =useParams()
  const [post, setPost] =useState({})

  useEffect( () => {
    new Promise((resolve) => {
      setTimeout( () =>{resolve(items);}, 2000)
      
    }).then((arrays) =>{
      let elemento= -1;
      arrays.items.forEach(element => {
        if(elemento ===-1 || elemento ===undefined)
          elemento =element.find( obj => obj.id===id)
      });
      setPost(elemento);
    })
  }, [id]);
  console.log(id);

  return(
    <div className='contenedor-item-detail'>
      <ItemDetail item={post}/>
    </div>
  );
}

export default ItemDetailContainer;