import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appConfigAction from '../../actions/appConfigAction'

export default (Node) => {

	let mapDispatchToProps = (dispatch) => {
		return bindActionCreators(appConfigAction, dispatch)
	};

	return connect((state) => {
		return { ...state }
	}, mapDispatchToProps)(Node);
};
