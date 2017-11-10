// 路由
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './../pages/home/home';
import Live from './../pages/live/live';
import Shoot from './../pages/shoot/shoot';
import Subscribe from './../pages/subscribe/subscribe';
import User from './../pages/user/user';
import Login from './../pages/login/login';

class Router extends React.Component {
	render() {
		return(
			<div className="page-wrapper">
			    <Route exact path="/" render={() => (
					<Redirect to="/home"/>
				)}/>
			    <Route path="/home" component={ Home }/>
			    <Route path="/live" component={ Live }/>
			    <Route path="/shoot" component={ Shoot }/>
			    <Route path="/subscribe" component={ Subscribe }/>
			    <Route path="/user" component={ Login }/>
			    <Route path="/login" component={ Login }/>
			</div>
		);
	}
}

export default Router;