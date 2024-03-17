
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../Features/Cart/CartSlice";

export const Store = configureStore  ({
    reducer: {
        cart: cartSlice.reducer
    }
})