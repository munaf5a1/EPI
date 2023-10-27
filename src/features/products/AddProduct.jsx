import React from 'react';
import { useFormik } from 'formik'
import { useAddProductMutation, useLazyGetAllProductsQuery } from '../../services/products.services';

function AddProduct() {
    const [addProdFn] = useAddProductMutation()
    const [loadProducts] = useLazyGetAllProductsQuery()
    var prodForm = useFormik({
        initialValues: {
            "title": "",
            "price": 0,
            "description": "",
            "category": "",
            "image": "",
            "rating": {
                "rate": 0,
                "count": 0
            }
        },
        onSubmit: (values) => {
            addProdFn(values).then((res) => {
                console.log(res)
                loadProducts()
                alert("Produt Added Successfully")
            }).catch((err) => { console.log(err) })
        }
    })
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={prodForm.handleSubmit}>
                <div>
                    <label htmlFor="">Product Title: </label>
                    <input type="text" name='title' placeholder='Product Title' onChange={prodForm.handleChange} />
                </div>
                <div>
                    <label htmlFor="Product Price">Product Price: </label>
                    <input type="text" name='price' placeholder='Product Price' onChange={prodForm.handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name='description' placeholder='Description' onChange={prodForm.handleChange} />
                </div>
                <div>
                    <label htmlFor="category">Category: </label>
                    <input type="text" name='category' placeholder='Category' onChange={prodForm.handleChange} />
                </div>
                <div>
                    <label htmlFor="imgUrl">Image URL: </label>
                    <input type="text" name='imgUrl' placeholder='Image URL' onChange={prodForm.handleChange} />
                </div>
                <button>Add Product</button>
            </form>
        </div>

    )
}

export default AddProduct