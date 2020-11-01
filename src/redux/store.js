import logger from 'redux-logger'
import { createStore,applyMiddleware } from 'redux';
import combineReducers from './root-reducer';

import { persistStore } from 'redux-persist';
const middlewars = [];
if(process.env.NODE_ENV ==='development'){
    middlewars.push(logger)
}
export const store = createStore (combineReducers,applyMiddleware(...middlewars))
export const persistor = persistStore(store)
export default { store,persistor }
// persistor: persisted version of the store (to create a provider to wrap our app)

