import logo from './Logo.svg';
function Footer() {
  return (
    <footer>
        <img src={logo} alt="logo" />
        <nav aria-label="Footer navigation">
            <h3>Doormat Navigation</h3>
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#orderonline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
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