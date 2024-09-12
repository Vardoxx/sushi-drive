import { createSlice } from "@reduxjs/toolkit";
import { ItemsProps } from "../../types/product-card";
import {
  AddToCartPayload,
  GetAllPositionsPayload,
  GetSumPayload,
  RemoveFromCartPayload,
} from "../../types/shopping-cart-slice";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    items: [] as ItemsProps[],
    totalCost: 0,
    totalQuantity: 0,
    productQuantity: 1,
  },
  reducers: {
    addItemToCart: (state, action: { payload: AddToCartPayload }) => {
      const product = action.payload;

      const existingItemIndex = state.items.findIndex(
        (i) => i.id === product.id
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity++;
        state.items[existingItemIndex].cost = product.cost;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalCost += product.cost;
      state.totalQuantity++;
    },

    removeItemFromCart: (state, action: { payload: RemoveFromCartPayload }) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemToRemove) {
        itemToRemove.quantity--;

        if (itemToRemove.quantity > 0) {
          state.totalCost -= itemToRemove.cost;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
          state.totalCost -= itemToRemove.cost;
        }
        state.totalQuantity--;
      }
    },

    getSum: (state, action: { payload: GetSumPayload }) => {
      const sum = action.payload.cost;
      state.totalCost += sum;
    },

    getAllPositions: (state, action: { payload: GetAllPositionsPayload }) => {
      const positions = action.payload.quantity;
      state.totalQuantity = positions;
    },
  },
});

export const { addItemToCart, removeItemFromCart, getSum, getAllPositions } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
