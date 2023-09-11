import '../styles/ItemCount.css'
import { useState, useRef } from 'react'

const ItemCount = ({stock, cantidadInicial}) => {

    const [stockDisponible, setStockDisponible] = useState(stock);
    const [contador, setContador] = useState(cantidadInicial);

    const incrementarCantidad = () => {
        if(contador<stockDisponible)
            setContador(contador+1)
    }

    const decrementarCantidad = () => {
        if(contador>=1)
            setContador(contador-1)
    }    
    
    function onAdd() {
        if (contador <= stockDisponible) {
            setStockDisponible(stockDisponible - contador)
            setContador(0)  //reinicio
        }
    }

    return (
        <div className="container">
            <p>Stock Disponible: {stockDisponible}</p>
            <div className="counter">
                <button id="btnDecrementar" onClick={decrementarCantidad}>-</button>
                <label id="counter-value">{contador}</label>
                <button id="btnIncrementar" onClick={incrementarCantidad} >+</button>
            </div>
            <button id="agregarAlCarrito" onClick={() => onAdd()}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount