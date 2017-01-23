import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history'
import {
	Router,
	Route,
	hashHistory,
	Redirect,
	browserHistory,
	IndexRedirect,
	useRouterHistory
} from 'react-router'
import Root, { store } from '../widget/root'
import Home from '../views/home'
import localRouters from '../localstore/local'
let appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

window.appName = '';
import '../static/styles/reset.scss';

ReactDOM.render(
	<Root>
		<Router history={appHistory}>
			<Route path="/" component={Home}>
				{localRouters.router.map((v, k) => {
					return (
						<Route key={k} {...v}/>
					)
				})}
				<Redirect from="*" to="menu"/>
			</Route>
		</Router>
	</Root>
	, document.getElementById('react_root'));
