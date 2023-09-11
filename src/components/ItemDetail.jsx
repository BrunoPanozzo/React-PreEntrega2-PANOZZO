import ItemCount from "./ItemCount";

function ItemDetail({ producto }) {

    console.log(producto)
    
    let cantidadInicial = 0

    function onAdd () {

    }

    return (

        <div>
            <h1>Producto Seleccionado: {producto.nombre}</h1>
            <img src={producto.imagen} alt={producto.nombre} width="270" />
            <h2>{producto.nombre}</h2>
            <p>{producto.categoría}</p>
            <p>{producto.descripción}</p>
            <p>{producto.precio}</p>
            <p>Stock Disponible: {producto.stock}</p>
            <ItemCount stock={producto.stock} cantidadInicial={cantidadInicial} onAdd={onAdd()} />
        </div>
    );
}

export default ItemDetail   