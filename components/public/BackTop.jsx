import React, {PropTypes} from 'react';
import ScrollToTop from 'react-scroll-up';
export default class BackTop extends React.Component {
	backTop() {
		window.scroll(0, 0);
	}
	render() {
		return (
			<ScrollToTop showUnder={0}>
				<div className="backtop"></div>
			</ScrollToTop>
		);
	}
}
