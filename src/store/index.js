import { createStore } from 'redux';

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers'
const persistConfirg ={
    key:'root',
    storage,
    whitelist:['languages']

}

const persistedReducer=persistReducer(persistConfirg,reducer)
const store = createStore(persistedReducer);
const persistor = persistStore(store)

export {store, persistor};