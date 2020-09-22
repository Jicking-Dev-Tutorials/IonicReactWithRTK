import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import { rootReducer } from './Reducer';
import storage from 'redux-persist/lib/storage'

const STORAGE_KEY = 'rtk00'

const persistConfig = {
	key: STORAGE_KEY,
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
		}
	})
});

export const persistor = persistStore(store);
