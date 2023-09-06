import '../styles/ItemCount.css'
import {useState} from 'react'

const ItemCount = () => {

    const [stockDisponible, setStockDisponible] = useState(10);
    const [contador, setContador] = useState(0);

    const incrementarCantidad = () => {
        if(contador<stockDisponible)
            setContador(contador+1)
    }

    const decrementarCantidad =() => {
        if(contador>=1)
            setContador(contador-1)
    }

    function ondAdd () {
       setStockDisponible(stockDisponible - count);
    }

    return (
        <div className="container">
            <div className="counter">
                <button id="btnDecrementar" onClick={decrementarCantidad}>-</button>
                <label id="counter-value">0</label>
                <button id="btnIncrementar" onClick={incrementarCantidad} >+</button>

            </div>
            <button id="agregarAlCarrito" onClick={() => onAdd()}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount