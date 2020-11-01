import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop-reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';// to tell redux you wanna use localStorage, you can use sessionStorage by accessing different path
const persistConfig = {
 key:'root', //means at what point inside our reducer obj we want to start
 storage,   //the kind of storage (localStorage)
 whitelist:['cart'] // string names of the reducers you want to handle
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})
export default persistReducer(persistConfig,rootReducer)
// modified version of rootReducer (persistor)