import '../styles/itemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, cantidadInicial, onAdd }) => {

    const [stockDisponible, setStockDisponible] = useState(stock);
    const [contador, setContador] = useState(cantidadInicial);

    const incrementarCantidad = () => {
        if (contador < stockDisponible)
            setContador(contador + 1)
    }

    const decrementarCantidad = () => {
        if (contador >= 1)
            setContador(contador - 1)
    }

    return (
        <div className="container">
            <div className="counter">
                <button id="btnDecrementar" onClick={decrementarCantidad}>-</button>
                <label id="counter-value">{contador}</label>
                <button id="btnIncrementar" onClick={incrementarCantidad} >+</button>
            </div>
            <button id="agregarAlCarrito" onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount