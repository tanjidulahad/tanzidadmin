import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice"
import themeReducer from "./theme/themeSlice"
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  user:userReducer,
  theme:themeReducer
});

const persistConfig = {
  key: 'tanzidadmin',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer
})