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
import LoginManager from '../views/page/loginManager';
let appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

window.appName = '';
import '../static/styles/reset.scss';

let type = true;
const isLogin = () => {
	//todo
	type ? console.log(13) : appHistory.push('/login');
};

ReactDOM.render(
	<Root>
		<Router history={appHistory}>
			<Route path="/login" component={LoginManager}/>
			<Route path="/" component={Home} onEnter={isLogin}>
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
