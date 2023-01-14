import React, {useState, useEffect} from "react";
import '../stylesheets/ItemDetailContainer.css'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom";




function ItemDetailContainer(){
  const {id} =useParams()
  const [post, setPost] =useState({})

  useEffect( () => {
    const db=getFirestore();
    const itemRef = doc(db, "items",id);
    getDoc(itemRef).then(snapshot => {setPost({id: snapshot.id, ...snapshot.data() })})

  }, [id]);

  return(
    <div className='contenedor-item-detail'>
      {post ? <ItemDetail item={post}/> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;