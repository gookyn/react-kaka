// 首页
import React from 'react';
import xhr from './../../axios';

import './home.scss';

import VideoItemLarge from './../../components/videoItemLarge';
import CatePanelMiddle from './../../components/catePanelMiddle';
import CateNav from './../../components/cateNav';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contList: [],
			hotList: [],
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

		// 获取推荐视频
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

		// 获取其他标签视频
		this.getCategoryConts({
			categoryId: 1
		});
	}

	// 获取其他标签视频
	getCategoryConts(opt) {
		xhr({
			url: 'http://app.pearvideo.com/clt/jsp/v2/getCategoryConts.jsp',
			options: {
				categoryId: opt.categoryId || 1,
				hotPageidx: 1,
			}
		}).then((res) => {
			this.setState({
				contList: res.contList,
				hotList: res.hotList,
			})
		})
	}

	// 切换分类
	changeCateHandle(categoryId) {
//		console.log(categoryId)
		this.getCategoryConts({
			categoryId: categoryId
		})
	}

	render() {
		return(
			<div className="page home-wrapper">
				<CateNav categoryList={this.state.categoryList} onClick={this.changeCateHandle.bind(this)}/>
				<CatePanelMiddle videoList={this.state.hotList} panelTitle="最热"/>
				<CatePanelMiddle videoList={this.state.contList} panelTitle="最新"/>
			</div>
		)
	}
}

export default Home;