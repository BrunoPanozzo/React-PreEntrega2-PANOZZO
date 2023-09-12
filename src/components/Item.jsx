// import split from "../img/productos/split.png"

import { Link } from "react-router-dom";

function Item({ producto }) {

    return (
        <div className="item">
            <h2>{producto.nombre}</h2>
            <Link to={"/item/" + producto.id}>
                <img src={producto.imagen} alt={producto.nombre} width="270" />
            </Link>
            <p>{producto.precio}</p>
            <Link to={`/item/${producto.id}`} className="btn btn-secondary text-decoration text-center">
                Ver detalle
            </Link>
        </div>
    );
}

export default Item;