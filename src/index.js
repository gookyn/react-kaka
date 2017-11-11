// 入口
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './pages/app/app';

import './utils/rem';
import './scss/index.scss';

// router
ReactDOM.render(
	<App />,
	document.getElementById('root')
);

// 本地服务，加快本地开发速度
registerServiceWorker();