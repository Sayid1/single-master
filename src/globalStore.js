import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['vm']
}

const initialSate = {
  user: '',
  vm: ''
}

function user(state = initialSate, action) {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...action.user
      }
    default:
      return state
  }
}

function vm(state = initialSate, action) {
  // console.log(state)
  switch(action.type) {
    case 'VM':
      return {
        ...action.vm
      }
    default:
      return state
  }
}

const persistedReducer = persistReducer(persistConfig, combineReducers({user, vm}))

export const storeInstance = createStore(persistedReducer)
export const persistor  = persistStore(storeInstance)