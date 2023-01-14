import React, {useState, useEffect} from "react";
import '../stylesheets/ItemListContainer.css'
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom";


function ItemListContainer(){
  const {id}=useParams()
  const [productos, setProductos] =useState([])
  useEffect(()=>{
    if(id==undefined){
      const db=getFirestore();
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot)=>{
      const products=snapshot.docs.map((doc)=> ({id:doc.id , ...doc.data()}));
      setProductos(products);
    }) ;
    }
    else{
      const db=getFirestore();
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot)=>{
        const products=snapshot.docs.map((doc)=> ({id:doc.id , ...doc.data()}));
        const newProducts=products.filter(producto => producto.category ==id)
      setProductos(newProducts);
    }) ;
    }
    
  },[id])

  /*useEffect(()=>{
    if(id==undefined){
      new Promise((resolve) => {
        setTimeout( () =>{resolve(items);}, 2000)
        
      }).then((obj) =>{setPosts(obj.items);})
    }
    else{
      new Promise((resolve) => {
        setTimeout( () =>{resolve(items);}, 2000)
        
      }).then((obj) =>{setPosts(obj.items[id]);})
    }
    
  },[id])*/
  return(
    <div className='contenedor-items'>
      {productos.length===0?<div>Cargando..</div>:<ItemList items={productos}></ItemList>}
    </div>
  );
}

export default ItemListContainer;