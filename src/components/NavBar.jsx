import { Link } from "react-router-dom"
import "../css/NavBar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <img src="/images/logo-acnh-en.png" alt="ACNH logo" height={75} />
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/freshwater" className="nav-link">Freshwater</Link>
            <Link to="/saltwater" className="nav-link">Saltwater</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar
