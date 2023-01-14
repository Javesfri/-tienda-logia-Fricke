import '../stylesheets/CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
function CartWidget(){
    const {totalItemsCarrito} =useContext(CartContext)
    return(
        <div className='CartWidget'>
            <FontAwesomeIcon className='icono-carrito' icon={faCartShopping} />
            <span>{totalItemsCarrito()}</span>
            
        </div>
    );
}
export default CartWidget;