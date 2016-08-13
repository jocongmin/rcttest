import React, {PropTypes} from 'react';

export default class LoadNow extends React.Component {
	detect() {
		var wH = window.innerHeight;
		var bottomPadding = 80;
		var m = document.querySelector('#loadState');
		var mT = m.getBoundingClientRect().top;
		if (mT < wH - bottomPadding) {
			return true;
		} else {
			return false;
		}
	}
	componentDidMount() {}
	render() {
		return (
			<div id='loadState' ref='loadState' className="pullUp loading more">
				<span className="pullUpIcon"></span>
				<span className="pullUpLabel">数据加载中...</span>
			</div>
		);
	}
}
