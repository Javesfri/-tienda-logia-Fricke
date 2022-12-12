import '../stylesheets/CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function CartWidget(){
    return(
        <div className='CartWidget'>
            <FontAwesomeIcon className='icono-carrito' icon={faCartShopping} />
            <span>4</span>
        </div>
    );
}
export default CartWidget;