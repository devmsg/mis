import{
	GET_APP_CONFIG_INFO,
} from '../constants/utilActionTypes'
import { ERROR_ACTION } from '../constants/publickActionTypes'

export default ()=> {
	return dispatch=> {
		dispatch({
			type     : GET_APP_CONFIG_INFO,
		});
	}
}

export function hideErrorItemAction() {
	return {
		type: ERROR_ACTION,
		data: {
			type: false
		}
	}
}
