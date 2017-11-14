// 分类 - 两列面板
import React from 'react';

import VideoItemMiddle from './videoItemMiddle';

const CatePanelMiddle = ({
	videoList,
	panelTitle
}) => {
	return(
		<div className="cate-panel-wrapper cate-panel-middle-wrapper">
			<div className="cate-panel-header">
				<span className="cate-panel-title">{panelTitle}</span>
			</div>
			<VideoItemMiddle videoList={videoList}/>
		</div>
	)
}

export default CatePanelMiddle;