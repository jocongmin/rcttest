import React, {PropTypes} from 'react';
import ReactSwipe from 'react-swipe';
const $data = [
	{
		src: 'home.html',
		img: 'img/i-lunbo.png'
	}, {
		src: 'home.html',
		img: 'img/i-lunbo.png'
	}, {
		src: 'home.html',
		img: 'img/i-lunbo.png'
	}
];
export default class Slider extends React.Component {
	render() {
		const $items = $data.map((item, key) => {
			return (
				<div className="lunbo" key={key}>
					<a href={item.src}><img src={item.img}/></a>
				</div>
			)
		});
		return (
			<div className="carousel" id="index-carousel">
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
		);
	}
}
