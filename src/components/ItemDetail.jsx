import ItemCount from "./ItemCount";

function ItemDetail({ producto }) {
       
    let cantidadInicial = 1
   
    return (

        <div>
            <h1>Producto Seleccionado</h1>
            <img src={producto.imagen} alt={producto.nombre} width="270" />
            <h2>{producto.nombre}</h2>
            <p>{producto.categoría}</p>
            <p>{producto.descripción}</p>
            <p>${producto.precio}</p>
            {/* <p>Stock Disponible: {producto.stock}</p> */}
            <ItemCount stock={producto.stock} cantidadInicial={cantidadInicial}/>
        </div>
    );
}

export default ItemDetail   