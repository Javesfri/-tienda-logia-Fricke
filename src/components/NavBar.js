import '../stylesheets/NavBar.css'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
function NavBar(){
    return(
        <div className='contenedor-nav'>
            <h2 className='brand'>TiendaLogia</h2>
            <ul className='nav-items'>
                <li className='li'><Link className='link' to={"/"}>Inicio</Link></li>
                <li className='li'><Link className='link' to={`/category/${0}`}>PCs</Link></li>
                <li className='li'><Link className='link' to={`/category/${1}`}>Tarjetas Graficas</Link></li>
                <li className='li'><Link className='link' to={"/"}>Contacto</Link></li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;