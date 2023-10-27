import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todoList/todoSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import { countriesApi } from "../services/countries"
import { productsApi } from '../services/products.services';


export const store = configureStore({
    reducer: {
        count: counterReducer,
        list: todoReducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware, productsApi.middleware),
})


setupListeners(store.dispatch)