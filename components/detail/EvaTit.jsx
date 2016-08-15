import React, {PropTypes} from 'react';

export default class EvaTit extends React.Component {
	render() {
		return (
			<div className="eva-header clearfix" id="eva-header">
				<ul className="clearfix">
					<li className="on">满意(105)</li>
					<li>一般(50)</li>
					<li>不满意(60)</li>
				</ul>
			</div>
		);
	}
}
