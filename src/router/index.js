// 路由
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './../pages/home/Home';
import Live from './../pages/live/Live';
import Shoot from './../pages/shoot/Shoot';
import Subscribe from './../pages/subscribe/Subscribe';
import User from './../pages/user/User';
import Login from './../pages/login/Login';

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