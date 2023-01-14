import '../stylesheets/NavBar.css'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
function NavBar(){
    return(
        <div className='contenedor-nav'>
            <h2 className='brand'>TiendaLogia</h2>
            <ul className='nav-items'>
                <li className='li'><Link className='link' to={"/"}>Inicio</Link></li>
                <li className='li'><Link className='link' to={`/category/computadoras`}>PCs</Link></li>
                <li className='li'><Link className='link' to={`/category/videocards`}>Tarjetas Graficas</Link></li>
                <li className='li'><Link className='link' to={"/"}>Contacto</Link></li>
            </ul>
            <Link className='link' to={"/cart"}><CartWidget/></Link>
        </div>
    );
}

export default NavBar;