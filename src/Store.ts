import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './Reducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware()
});