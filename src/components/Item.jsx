// import split from "../img/productos/split.png"

function Item({ producto }) {

    return (
        <div className="item">
            <a key={producto.id}>
                <h2>{producto.nombre}</h2>
                <img src={producto.imagen} alt={producto.nombre} width="270" />
                <p>{producto.precio}</p>
            </a>
        </div>
    );
}

export default Item;