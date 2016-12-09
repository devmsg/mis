import {createStore} from 'redux';
import rootReducers from '../reducers';

export default (initialState, enhancer) => createStore(rootReducers, initialState, enhancer);
