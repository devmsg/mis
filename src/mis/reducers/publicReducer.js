import { ERROR_ACTION } from '../constants/publickActionTypes'
import $ from 'jquery'

const defaultErrorItem = {
	title    : '',
	content  : '',
	type     : false,
	errorType: 'info',
	duration:'2',
};

export default (state = {
	errorItemType: $.extend(true, {}, defaultErrorItem)
}, action)=> {
	let newState = $.extend(true, {}, state);

	switch (action.type) {
		case ERROR_ACTION:
			let { errorItemType } = newState;

			if (action.data.type) {
				$.extend(errorItemType, action.data)
			} else {
				$.extend(errorItemType, defaultErrorItem);
			}
			return newState;
		default:
			return newState;
	}
}