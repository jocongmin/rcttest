import React, {PropTypes} from 'react';
import ReactSwipe from 'react-swipe';

export default class Slider extends React.Component {
	render() {
		return (
			<div className="carousel" id="index-carousel">
				<ReactSwipe ref='slider' className="carousel" swipeOptions={{
					speed: 400,
					auto: 1500,
					continuous: true,
					disableScroll: false,
					stopPropagation: false
				}}>
					<div className="lunbo"><img src="img/i-lunbo.png"/></div>
					<div className="lunbo"><img src="img/i-lunbo.png"/></div>
					<div className="lunbo"><img src="img/i-lunbo.png"/></div>
				</ReactSwipe>
			</div>
		);
	}
}
