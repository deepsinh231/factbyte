import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import phoneReducer from "./PhoneReducer.js";

const Store = configureStore({
    reducer: {
        auth: AuthSlice,
        phone: phoneReducer, // Add phone slice
    }
});

export default Store;