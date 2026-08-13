import logo from './Logo.svg';
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer>
        <img src={logo} alt="logo" />
        <nav aria-label="Footer navigation">
            <h3>Doormat Navigation</h3>
            <ul>
            <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
        </ul>
        </nav>
        <address>
            <h3>Contact</h3>
            <p>Address</p>
            <p>Phone</p>
            <p>Email</p>
        </address>
    </footer>
  );
}

export default Footer;