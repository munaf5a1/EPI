import React from 'react'
import { useGetAllCountriesQuery } from './services/countries'

function Countries() {
    const { isLoading, data } = useGetAllCountriesQuery();
    // console.log(data)
    return (
        <div>
            {isLoading && <h1>Loading</h1>}
            <h1>All Countries</h1>
            <ul>

                {
                    !isLoading && data.map((country) => {
                        return <li>{country.name.common}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Countries