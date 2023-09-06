import Logo from "../img/NavBar/logo-brand.png"
import CartWidget from "./CartWidget"

const NavBar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-encabezado">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="logo brand" width="200" height="110" className="d-inline-block align-text-top" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item enlace">
                                <a className="nav-link active" aria-current="page" href="#">Móviles</a>
                            </li>
                            <li className="nav-item enlace">
                                <a className="nav-link active" href="#">TV & Audio</a>
                            </li>
                            <li className="nav-item enlace">
                                <a className="nav-link active" href="#">Electrodomésticos</a>
                            </li>
                            <li className="nav-item enlace">
                                <a className="nav-link active" href="#">Computación</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar