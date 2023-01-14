import React, { useContext } from "react";
import "../stylesheets/Cart.css";
import { CiCircleRemove } from "react-icons/ci";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { carrito, vaciarCarrito, eliminarItemCarrito,totalPrecioCarrito } = useContext(CartContext);
  console.log(carrito.length);
  const removerItem = (id) => {
    eliminarItemCarrito(id)
  };

  const handleVaciarCarrito = ()=>{
    vaciarCarrito();
  }
  const handlePrecioTotalCarrito=()=>totalPrecioCarrito();
  


  return (
    <div className="cart-contenedor">
      <div className="cart-titulo">
        <h2>carrito</h2>
      </div>
      <div className="cart-articulos-tabla">
        <div className="cart-articulos-titulos">
          <div className="cart-product-titulo">Producto</div>
          <div className="cart-product-precio">Precio</div>
          <div className="cart-product-precio">Cantidad</div>
          <div className="cart-product-precio">Subtotal</div>
        </div>
        <div className="cart-articulos">
          {carrito.length ==0 ? 
            <div className="cart-vacio"><h2>Carrito Vacio</h2></div>
          : 
            carrito.map((item) => {
              return (
                <div className="cart-articulo">
                  <div className="cart-articulo-imagen-nombre">
                    <CiCircleRemove
                      className="icono-circulo"
                      onClick={()=>{removerItem(item.id)}}
                    />
                    <img
                      className="cart-articulo-imagen"
                      src={item.imageId}
                    />
                    <div className="cart-articulo-nombre">{item.name}</div>
                  </div>
                  <div className="cart-articulo-precio">{`$${item.price}`}</div>
                  <div className="cart-articulo-precio">{item.cantidad}</div>
                  <div className="cart-articulo-precio">{`$${item.price*item.cantidad}`}</div>
                </div>
              );
            })
          }
        </div>
      </div>
      {carrito.length !=0 && 
      <div className="cart-checkout-contenedor">
        <div className="cart-vaciar-carrito"><button onClick={handleVaciarCarrito} >Vacíar Carrito</button></div>
        <div className="cart-checkout">
          <div className="cart-checkout-total">
            <h3>Total:</h3><h3>${handlePrecioTotalCarrito()}</h3>
          </div>
          <Link to="/checkout"><button className="button-1">Pagar</button></Link>
        </div>
      </div>}
    </div>
  );
};
export default Cart;
