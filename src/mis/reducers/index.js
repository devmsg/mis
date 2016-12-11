import { combineReducers } from 'redux';

import appConfigReducer from './appConfigReducer';
import publicReducer from './publicReducer';
export default combineReducers({
	appConfigReducer,
	publicReducer
});
