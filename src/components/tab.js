// tab
import React from 'react';
import { Link } from 'react-router-dom';

class Tab extends React.Component {
	render() {
		return(
			<div className="tab-wrapper">
				<Link to="/home" className="tab-item t-c">首页</Link>
				<Link to="/live" className="tab-item t-c">直播</Link>
				<Link to="/shoot" className="tab-item t-c">拍摄</Link>
				<Link to="/subscribe" className="tab-item t-c">订阅</Link>
				<Link to="/user" className="tab-item t-c">我的</Link>
      		</div>
		);
	}
}

export default Tab;