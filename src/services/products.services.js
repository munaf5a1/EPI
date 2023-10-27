// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/products' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/`,
        }),
        deleteProductById: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            })
        }),
        addProduct: builder.mutation({
            query: (product) => {
                return {
                    url: "/",
                    method: "POST",
                    body: product
                }
            }
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useDeleteProductByIdMutation, useLazyGetAllProductsQuery, useAddProductMutation } = productsApi