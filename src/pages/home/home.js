// 首页
import React from 'react';
import xhr from './../../axios';

import './home.scss';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listItems: []
		}
	}

	componentWillMount() {

		// 获取类别
		xhr({
			url: 'http://app.pearvideo.com/clt/jsp/v2/getCategorys.jsp'
		}).then((res) => {

		})

		// 获取视频
		xhr({
			url: 'http://app.pearvideo.com/clt/jsp/v2/home.jsp?',
			options: {
				lastLikeIds: '1063871%2C1063985%2C1064069%2C1064123%2C1064078%2C1064186%2C1062372%2C1064164%2C1064081%2C1064176%2C1064070%2C1064019'
			}
		}).then((res) => {
			const listItems = res.dataList[0].contList.map((item) =>
				<div className="video-item-large">
					<div className="video-file">
						<video src={item.coverVideo} controls="controls"></video>
					</div>
					<div className="video-desc">
						<div className="video-title fs-16 fw-b">{item.name}</div>
						<div className="video-author">
							<img src={item.nodeInfo.logoImg} alt="头像" className="video-author-avator v-m"/>
							<div className="video-author-name v-m">{item.nodeInfo.name}</div>
							<div className="video-viewpoint f-r">分享</div>
						</div>
					</div>
				</div>
			);
			
			this.setState({
				listItems: listItems
			})
		})
	}

	render() {
		return(
			<div className="page home-wrapper">
				<ul>{this.state.listItems}</ul>
			</div>
		)
	}
}

export default Home;