// 主容器
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// 组件
import Router from './../../router';
import Head from './../../components/head';
import Tab from './../../components/tab';

import './app.scss';

class App extends React.Component {
	render() {
		return(
			<div id="app">
				<BrowserRouter>
					<div className="main-wrapper">
						<Head />
						<Router />
						<Tab />
					</div>
				</BrowserRouter>
      		</div>
		);
	}
}

export default App;