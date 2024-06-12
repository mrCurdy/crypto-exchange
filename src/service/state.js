import { createAction, createReducer, configureStore } from "@reduxjs/toolkit"

const initialState = {
    showSideBar: false,
    errorMessage: null,
    coinData: null,
    foundCoins: null,

}

export const setShowSideBar = createAction("setShowSideBar");
export const setErrorMessage = createAction("setErrorMessage");
export const setCoinData = createAction("setCoinData");
export const setFoundCoins = createAction("setFoundCoins");

const appReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(setShowSideBar, (state, action) => {
        state.showSideBar = action.payload;
    }).addCase(setErrorMessage, (state, action) => {
        state.errorMessage = action.payload;
    }).addCase(setCoinData, (state, action) => {
        state.coinData = action.payload;
    }).addCase(setFoundCoins, (state, action) => {
        state.foundCoins = action.payload;
    });
});

export const store = configureStore({
    reducer: appReducer,
});