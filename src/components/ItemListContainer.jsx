import { useState, useEffect } from 'react'
import productos from "../data/productos.json"
import ItemList from "./ItemList"

function cargarProductos(tipo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!tipo)
                resolve(productos)
            else {
                const productosPorTipo = productos.filter((valor) => {
                    return valor.tipo === tipo
                })
                resolve(productosPorTipo)
            }
        }, 2000);
    })
}

const ItemListContainer = ({ tipoProducto }) => {

    const [productosFiltrados, setProductosFiltrados] = useState(productos)
    let [loading, setLoading] = useState(true)
    const [tipo, setTipo] = useState(tipoProducto)

    useEffect(() => {
        cargarProductos(tipo)
            .then((data) => {
                setProductosFiltrados(data)
            })
            .finally(() => {
                setLoading(false)
            });
    }, [])


    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className="item-list-container">
            {/* <h1>{greeting}</h1> */}
            <ItemList productosAMostrar={productosFiltrados} />
        </div>
    )

}

export default ItemListContainer