import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from 'react'

function ItemDetail({ producto }) {

    const [stockDisponible, setStockDisponible] = useState(producto.stock);
    const [contador, setContador] = useState(0);

    function onAdd(cantidadElegida) {

        setContador(cantidadElegida)
        setStockDisponible(stockDisponible - cantidadElegida)
    }

    return (

        <div>
            <h1>Producto Seleccionado</h1>
            <img src={producto.imagen} alt={producto.nombre} width="270" />
            <h2>{producto.nombre}</h2>
            <p>{producto.categoría}</p>
            <p>{producto.descripción}</p>
            <p>${producto.precio}</p>
            <p>Stock Disponible: {stockDisponible}</p>

            {contador > 0 ? <Link to="/cart">Finalizar Compra</Link> : <ItemCount stock={producto.stock} cantidadInicial={contador} onAdd={onAdd} />}
        </div>
    );
}

export default ItemDetail   