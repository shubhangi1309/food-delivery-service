import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// will give us STORE of REACT app
const appStore = configureStore({
    reducer: {
        cart: cartReducer, // in store we've configured SLICE
    }
});

export default appStore;