import { combineReducers } from 'redux';

import appConfig from './appConfigReducer';
import publicReducer from './publicReducer';
export default combineReducers({
	appConfig,
	publicReducer
});
