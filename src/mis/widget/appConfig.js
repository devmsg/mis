import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appConfigAction from '../actions/appConfigAction'
import $ from 'jquery';

export default (Node, otherAction = {})=> {

	let mapDispatchToProps = (dispatch) => {
		return bindActionCreators($.extend(appConfigAction, otherAction), dispatch)
	};

	return connect((state)=> {
		return { ...state }
	}, mapDispatchToProps)(Node);

};
