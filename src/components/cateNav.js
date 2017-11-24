// 分类导航
import React from 'react';

const CateNav = ({
	categoryList,
	changeCateHandle,
	onClick
}) => {
	// 选择某个分类
	const handleClick = (categoryId) => {
		// 调用外部方法
		if(onClick) {
//			onClick(categoryId)
		}
	}

	const list = categoryList.map((item, index) => {
		return <li className="cate-item" key={index} onClick={handleClick}>
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

export default CateNav;