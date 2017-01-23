import { combineReducers } from 'redux';

import appConfigReducer from './appConfigRenducer';
import publicReducer from './publicReducer';
export default combineReducers({
	appConfigReducer,
	publicReducer
});
