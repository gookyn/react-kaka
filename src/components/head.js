// 头部
import React from 'react';

class Head extends React.Component {
	render () {
		return (
			<header className="header-wrapper fs-18">
				<div className="header-l return-btn">
					<i className="iconfont icon-return"></i>
				</div>
				<div className="header-m t-c header-title">登录</div>
				<div className="header-r">
					<i className="iconfont icon-home"></i>
				</div>
			</header>
		)
	}
}

export default Head;
