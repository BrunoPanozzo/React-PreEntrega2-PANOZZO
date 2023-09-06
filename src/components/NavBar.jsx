import Logo from "../img/logo-cine.png"
import CartWidget from "./CartWidget"

const NavBar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-encabezado">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="logo cine" width="150" height="110" className="d-inline-block align-text-top" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item enlace">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item enlace">
                                <a className="nav-link active" href="#">Películas</a>
                            </li>
                            <li className="nav-item enlace">
                                <a className="nav-link active" href="#">Series</a>
                            </li>
                            <li className="nav-item enlace">
                                <a className="nav-link active" href="#">Colecciones</a>
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