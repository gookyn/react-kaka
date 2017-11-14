// 首页 - 分类导航
import React from 'react';

const HomeCateCarousel = ({
	categoryList,
	changeCateHandle
}) => {
	const list = categoryList.map((item, index) => {
		return <li className="cate-item" key={index} onClick={changeCateHandle.bind(null, item.categoryId)}>
					{item.name}
				</li>
	})

	return(
		<div className="home-cate-wrapper">
			<ul className="home-cate-list">
				{list}	
			</ul>
		</div>
	)
}

export default HomeCateCarousel;