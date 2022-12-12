import React, {useState, useEffect} from "react";
import '../stylesheets/ItemListContainer.css'
import ItemList from "./ItemList";
import items from '../items.json'
import { useParams } from "react-router-dom";


function ItemListContainer(){
  const {id}=useParams()
  const [posts, setPosts] =useState([])

  useEffect( () => {
    new Promise((resolve) => {
      setTimeout( () =>{resolve(items);}, 2000)
      
    }).then((obj) =>{ id? setPosts(obj.items[id]) : setPosts(obj.items)})
  },[id]);
  return(
    <div className='contenedor-items'>
      { 
        
          id? <ItemList items={posts} key={posts.id}/>
            
          : posts.map((element, index) => 
          <ItemList items={element} key={index}/>)
          

      /*posts.map(array =>(
        <ItemList items={array}/>
      ))*/
    }
      
      
      
    </div>
  );
}

export default ItemListContainer;