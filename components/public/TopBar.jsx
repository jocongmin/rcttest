import React, {PropTypes} from 'react';

export default class TopBar extends React.Component {
	render() {
		return (
			<div className="top-bar top-bar-on" id="top-bar">
				<em className="bk"></em>
				<span className="tit">{this.props.title}</span>
				<em className="hm"></em>
				<em className="sr" id="share-wx"></em>
			</div>
		);
	}
}
