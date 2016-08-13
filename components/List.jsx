import React, {PropTypes} from 'react';
import ListNav from './list/ListNav.jsx';
import ListSlider from './list/ListSlider.jsx';
import ProList from './list/ProList.jsx';
import Aside from './list/Aside.jsx';
import Nav from './public/Nav.jsx';
import LoadNow from './public/LoadNow.jsx';
import ScrollToTop from 'react-scroll-up';
class BackTop extends React.Component {
	backTop() {
		console.log('666')
	}
	render() {
		return (
			<ScrollToTop showUnder={160}>
				<div className="backtop" onClick={this.backTop.bind(this)}></div>
			</ScrollToTop>
		);
	}
}

export default {
	ListNav,
	ListSlider,
	ProList,
	Nav,
	Aside,
	BackTop,
	LoadNow
}
