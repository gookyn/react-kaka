// 首页
import React from 'react';
import xhr from './../../axios';

import './home.scss';

import VideoItemLarge from './../../components/videoItemLarge';
import VideoItemMiddle from './../../components/videoItemMiddle';
import HomeCateCarousel from './../../components/homeCateCarousel';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contList: [],
			categoryList: [],
		}
	}

	componentWillMount() {
		// 获取列表
		xhr({
			url: 'http://app.pearvideo.com/clt/jsp/v2/getCategorys.jsp',
		}).then((res) => {
			this.setState({
				categoryList: res.categoryList
			})
		})

		// 获取视频
		xhr({
			url: 'http://app.pearvideo.com/clt/jsp/v2/home.jsp',
			options: {
				lastLikeIds: '1063871%2C1063985%2C1064069%2C1064123%2C1064078%2C1064186%2C1062372%2C1064164%2C1064081%2C1064176%2C1064070%2C1064019'
			}
		}).then((res) => {
			this.setState({
				contList: res.dataList[0].contList
			})
		})
	}
	render() {
		return(
			<div className="page home-wrapper">
				<HomeCateCarousel categoryList={this.state.categoryList}/>
				<VideoItemMiddle videoList={this.state.contList}/>
				<VideoItemLarge videoList={this.state.contList}/>
			</div>
		)
	}
}

export default Home;