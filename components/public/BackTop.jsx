import React, {PropTypes} from 'react';

export default class BackTop extends React.Component {
	backTop() {
		window.scroll(0, 0);
	}
	render() {
		return (
			<div className="backtop" onClick={this.backTop.bind(this)}></div>
		);
	}
}
