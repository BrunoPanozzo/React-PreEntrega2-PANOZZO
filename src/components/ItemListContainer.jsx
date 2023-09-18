import { useState, useEffect } from 'react'
import productos from "../data/productos.json"
import ItemList from "./ItemList"
import Loading from './Loading'
import { useParams } from 'react-router'

const ItemListContainer = () => {

    function cargarProductos(nombreCategoria) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!nombreCategoria)
                    resolve(productos)
                else {
                    const productosPorTipo = productos.filter((valor) => {
                        return valor.categoría === nombreCategoria
                    })
                    resolve(productosPorTipo)
                }
            }, 2000);
        })
    }

    const [productosFiltrados, setProductosFiltrados] = useState(productos)
    const [loading, setLoading] = useState(true)
    const { nombreCategoria } = useParams()

    useEffect(() => {
        setLoading(true)
        cargarProductos(nombreCategoria)
            .then((data) => {
                setProductosFiltrados(data)
            })
            .finally(() => {
                setLoading(false)
            });
    }, [nombreCategoria])

    if (loading) {
        return (
            !nombreCategoria ? <Loading texto={"Cargando productos..."} /> : <Loading texto={`Cargando productos de la categría ${nombreCategoria}...`} />
        )
    }

    return (
        <div className="item-list-container">
            <ItemList productosAMostrar={productosFiltrados} />
        </div>
    )
}

export default ItemListContainer