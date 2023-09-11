import { useState, useEffect } from 'react'
import productos from "../data/productos.json"
import ItemDetail from "./ItemDetail"
import Loading from './Loading'
import { useParams } from 'react-router'


const ItemDetailContainer = ()  => {
    
    function cargarProducto(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let productoPorID = productos.find(valor => 
                    valor.id === parseInt(id)
                )
                resolve(productoPorID)
            }, 2000);
        })
    }

    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        cargarProducto(id)
            .then((data) => {
                setProducto(data)
            })
            .finally(() => {                
                setLoading(false)
            });
    }, [id])


    if (loading) {
        return (
            <Loading texto={"Cargando producto seleccionado..."}/>
        )
    }

    // if (!producto) return null;

    return (
        <div className="item-detail-container">
            <ItemDetail producto={producto} />
        </div>
    )

}

export default ItemDetailContainer