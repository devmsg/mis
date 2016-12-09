import $ from 'jquery'

import {
	GET_APP_CONFIG_INFO,
} from '../constants/utilActionTypes'


let setInfo = (info) => {
	return info;
};

export default (state = {
	menu : {
		admin: {}
	}
}, action)=> {
	let newState = $.extend(true, {}, state);
	switch (action.type) {
		case GET_APP_CONFIG_INFO:
			newState = setInfo(action.appConfig);
			break;
	}
	return newState;

}
