import React, { Component } from 'react'
import{
	GET_APP_CONFIG_INFO,
} from '../constants/utilActionTypes'
import {
	applyMiddleware,
	compose
} from 'redux'
import { Provider } from 'react-redux'
import createStore from '../store'
import thunk from 'redux-thunk'
import localstore from '../localstore/local'

export const store = createStore(compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

class Node extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {};
	}

	render() {

		store.dispatch({
			type     : GET_APP_CONFIG_INFO,
			appConfig: localstore
		});

		return (
			<Provider store={store}>
				{ this.props.children }
			</Provider>
		)
	}
}

export default Node;
