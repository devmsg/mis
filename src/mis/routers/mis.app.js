import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Route,
	hashHistory,
	Redirect,
	browserHistory,
	IndexRedirect
} from 'react-router'
import Root, { store } from '../widget/root'
import Home from '../views/home'
import localRouters from '../localstore/local'

window.appName = '';
require('../static/styles/reset.scss');

ReactDOM.render(
	<Root>
		<Router history={hashHistory}>
			<Route path="/" component={Home}>
				<IndexRedirect to="/path"/>
				{localRouters.router.map((v, k) => {
					return (
						<Route key={k} {...v}/>
					)
				})}
			</Route>
		</Router>
	</Root>
	, document.getElementById('react_root'));
