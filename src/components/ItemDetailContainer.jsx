import { useState, useEffect } from 'react'
import productos from "../data/productos.json"
import ItemDetail from "./ItemDetail"

function cargarProducto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoPorID = productos.filter((valor) => {
                return valor.id === id
            })
            resolve(productoPorID)
        }, 2000);
    })
}

const ItemDetailContainer = ({ id })  => {

    const [producto, setProducto] = useState()
    let [loading, setLoading] = useState(true)
    // const [tipo, setTipo] = useState(tipoProducto)

    useEffect(() => {
        cargarProducto(id)
            .then((data) => {
                setProducto(data)
            })
            .finally(() => {
                setLoading(false)
            });
    }, [])


    if (loading) {
        return <p>Cargando producto seleccionado...</p>;
    }

    if (!producto) return null;

    return (
        <div className="item-detail-container">
            <ItemDetail producto={producto} />
        </div>
    )

}

export default ItemDetailContainer