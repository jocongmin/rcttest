import React, {PropTypes} from 'react';
import ReactSwipe from 'react-swipe';
const $data = [
	{
		src: 'home.html',
		img: 'img/d-banner.png'
	}, {
		src: 'home.html',
		img: 'img/d-banner.png'
	}, {
		src: 'home.html',
		img: 'img/d-banner.png'
	}
];
export default class Slider extends React.Component {
	render() {
		const $items = $data.map((item, key) => {
			return (
				<a key={key} href={item.src}><img src={item.img}/></a>
			)
		});
		return (
			<section id="d-banner" className="banner">
				<div className="box">
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
			</section>
		);
	}
}
