import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { movieReducers } from './reducers/phimReducer/PhimReducers'

const rootReducer = combineReducers({
    movieReducers,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))