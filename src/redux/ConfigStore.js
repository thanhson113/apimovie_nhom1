import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { carouselReducer } from './reducers/CarouselReducer'
import { DatVeReducer } from './reducers/DatVeReducer'
import { nguoiDungReducer } from './reducers/NguoiDungReducer'
import { movieReducers } from './reducers/PhimReducers'
import { rapPhimReducer } from './reducers/RapPhimReducer'

const rootReducer = combineReducers({
    movieReducers,
    carouselReducer,
    rapPhimReducer,
    nguoiDungReducer,
    DatVeReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))