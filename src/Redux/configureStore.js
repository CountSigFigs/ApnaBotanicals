import { createStore, applyMiddleware } from 'redux';
import {Reducer} from './reducer'
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, 
        applyMiddleware(thunk)
    )
    return store;
}

