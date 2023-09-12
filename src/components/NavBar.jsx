import '../styles/navBar.css'
import Logo from "../img/NavBar/logo-brand.png"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-encabezado">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="logo brand" width="250" height="50" className="d-inline-block align-text-top" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item enlace">
                            <NavLink className="nav-link" to="/">Tienda Online</NavLink>
                        </li>
                        <li className="nav-item enlace">
                            <NavLink className="nav-link" to="/category/Móviles">Móviles</NavLink>
                        </li>
                        <li className="nav-item enlace">
                            <NavLink className="nav-link" to="/category/TV & Audio">TV & Audio</NavLink>
                        </li>
                        <li className="nav-item enlace">
                            <NavLink className="nav-link" to="/category/Electrodomésticos">Electrodomésticos</NavLink>
                        </li>
                        <li className="nav-item enlace">
                            <NavLink className="nav-link" to="/category/Computación">Computación</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar