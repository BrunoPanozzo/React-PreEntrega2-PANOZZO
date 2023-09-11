import '../styles/ItemList.css'
import Item from './Item'

function ItemList({ productosAMostrar }) {

    return (
        <div className="item-list">
            <h1>Productos Seleccionados</h1>
            {productosAMostrar.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    );
}

export default ItemList;