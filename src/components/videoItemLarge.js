// 一列视频
import React from 'react';

const VideoItemLarge = ({
	videoList,
}) => {
	const list = videoList.map((item, index) => {
		return <li className="video-item video-item-large" key={index}>
					<div className="video-file">
						<video src={item.coverVideo} controls="controls"></video>
					</div>
					<div className="video-desc">
						<div className="video-name fs-16 fw-b ellipsis">{item.name}</div>
						<div className="video-nodeInfo">
							<img src={item.nodeInfo.logoImg} alt="头像" className="video-nodeInfo-logoImg v-m"/>
							<span className="video-nodeInfo-name v-m">{item.nodeInfo.name}</span>
							<span className="video-viewpoint f-r">分享</span>
						</div>
					</div>
				</li>
	})

	return(
		<ul className="video-item-wrapper video-item-large-wrapper">
			{list}
		</ul>
	)
}

export default VideoItemLarge;