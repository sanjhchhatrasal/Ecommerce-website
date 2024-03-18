import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct : (state, action) => {
            /* const product =  {
                id: nanoid(),
               
            } */
            state.push(action.payload)
        },
        removeProduct : (state, action) => {
           return  state.filter((product) => product.id !== action.payload)
        }
    }
})

export const {addProduct, removeProduct} = cartSlice.actions;

export default cartSlice.reducer