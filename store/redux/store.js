import { configureStore } from "@reduxjs/toolkit";
    // npm install @reduxjs/toolkit react-redux

import favoritesReducer from './favorites';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer
    }
});