import React from 'react'
import { useDeleteProductByIdMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery } from '../../services/products.services'

function Productsview() {
    const { isLoading, data } = useGetAllProductsQuery()
    var [dfn] = useDeleteProductByIdMutation()
    const [loadData, status] = useLazyGetAllProductsQuery()
    const lazyData = useLazyGetAllProductsQuery()
    console.log("products", data)
    const deletefn = (id) => {
        dfn(id).then((res) => {
            loadData()
            // console.log(k)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1>Products</h1>
            {!isLoading && data.map((product) => {
                return <li className='listItem'>
                    {product.title}
                    <button onClick={() => { deletefn(product.id) }}>delete</button>
                </li>
            })
            }
        </div>
    )
}

export default Productsview