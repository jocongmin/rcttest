import React, {PropTypes} from 'react';
import ReactSwipe from 'react-swipe';
const $data = [
	{
		src: 'abc.html',
		img: 'img/list-pro.jpg',
		tit: '韩菲诗焕颜洗颜泥女补水保湿颜洗颜泥女补水保湿颜洗颜泥女补水保湿颜洗颜泥',
		pri: '255.00'
	}, {
		src: 'abc.html',
		img: 'img/list-pro.jpg',
		tit: '韩菲诗焕颜洗颜泥女补水保湿颜洗颜泥女补水保湿颜洗颜泥女补水保湿颜洗颜泥',
		pri: '255.00'
	}, {
		src: 'abc.html',
		img: 'img/list-pro.jpg',
		tit: '韩菲诗焕颜洗颜泥女补水保湿颜洗颜泥女补水保湿颜洗颜泥女补水保湿颜洗颜泥',
		pri: '259.00'
	}, {
		src: 'abc.html',
		img: 'img/list-pro.jpg',
		tit: '韩菲诗焕颜洗颜泥女补水保湿颜洗颜泥女补水保湿颜洗颜泥女补水保湿颜洗颜泥',
		pri: '255.00'
	}
];
export default class ListSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: $data
		}
	}
	render() {
		const $items = this.state.data.map((item, key) => {
			return (
				<a href={item.src} key={key}>
					<div className="item">
						<div className="pic">
							<img src={item.img}/>
						</div>
						<div className="info">
							<div className="mouth">
								<em></em>
								<span>口碑产品</span>
								<em></em>
							</div>
							<div className="tit">
								{item.tit}
							</div>
							<div className="pri">
								￥{item.pri}
							</div>
						</div>
					</div>
				</a>
			)
		});
		return (
			<div id="list-banner-pro" className="banner-pro clearfix">
				<ReactSwipe ref='slider' className="carousel" swipeOptions={{
					speed: 400,
					auto: 1500,
					continuous: true,
					disableScroll: false,
					stopPropagation: false
				}}>
					{$items}
				</ReactSwipe>
			</div>
		)
	}
}
