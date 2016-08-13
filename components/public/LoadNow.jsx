import React, {PropTypes} from 'react';

export default class LoadNow extends React.Component {
	render() {
		return (
			<div className="pullUp loading more">
				<span className="pullUpIcon"></span>
				<span className="pullUpLabel">数据加载中...</span>
			</div>
		);
	}
}
