import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

const initialState: Product[] = [];

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.find((product) => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 }); //quantity = 1 as default value
            }
        },
        decrementProduct: (state, action: PayloadAction<number>) => {
            const productIndex = state.findIndex((product) => product.id === action.payload);
            if (productIndex !== -1) {
                if (state[productIndex].quantity > 1) {
                    state[productIndex].quantity -= 1;
                } else {
                    state.splice(productIndex, 1); // remove the product when it is 0
                }
            }
        }
    }
});

export const { addProduct, decrementProduct } = productsSlice.actions;
export default productsSlice.reducer;
