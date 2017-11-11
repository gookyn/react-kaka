import React from 'react';

const VideoItemMiddle = ({
	videoList,
}) => {
	const list = videoList.map((item, index) => {
		return <li className="video-item video-item-middle" key={index}>
					<div className="video-pic">
						<img src={item.pic} alt={item.name}/>
					</div>
					<div className="video-desc">
						<div className="video-name fw-b">{item.name}</div>
						<div className="video-nodeInfo">
							<span className="video-nodeInfo-name v-m fs-12">{item.nodeInfo.name}</span>
							<span className="video-nodeInfo-duration v-m fs-12">{item.duration}</span>
							<div className="video-corner-label-desc f-r">推荐</div>
						</div>
					</div>
				</li>
	})

	return(
		<ul className="video-item-wrapper video-item-middle-wrapper">
			{list}
		</ul>
	)
}

export default VideoItemMiddle;