import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
     const CustomClassName = ({ isActive }) => {
    return isActive ? "menu__link_active" : "menu__link";
  }
  return (
    <nav className="menu">
      <NavLink to="/" className={CustomClassName}>Inicio</NavLink>
      <NavLink to="/reviews" className={CustomClassName}>Reseñas de emojis</NavLink>
      <NavLink to="/about-me" className={CustomClassName}>Sobre mí</NavLink>
      <NavLink to="/about-us" className={CustomClassName}>Sobre nosotros</NavLink>
    </nav>
  )
}

export default NavBar;