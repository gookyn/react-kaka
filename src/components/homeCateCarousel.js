import React from 'react';
import { Carousel } from 'antd-mobile';

const HomeCateCarousel = ({
	categoryList,
}) => {
	const list = categoryList.map((item, index) => {
		return <div className="cate-item" key={index}>
					{item.name}
				</div>
	})

	return(
		<Carousel className="home-cate-wrapper" dots={false}>
			{list}	
		</Carousel>
	)
}

export default HomeCateCarousel;