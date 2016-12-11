import $ from 'jquery'

import {
	GET_APP_CONFIG_INFO,
} from '../constants/utilActionTypes'

export default (state, action)=> {
	let newState = $.extend(true, {}, state);
	switch (action.type) {
		case GET_APP_CONFIG_INFO:
			newState = action.appConfig;
			break;
	}
	return newState;

}
