import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProductsState {
    id: number;
    name: string;
    price: number;
    image: string;
}

const initialState: ProductsState[] = [];

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
})

export default productsSlice.reducer;