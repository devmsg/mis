import {
	postLoginXHR
} from './XHRAction'

export function postLoginAction(option = {}) {
	return postLoginXHR(option);
}
