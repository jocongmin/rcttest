import React, {PropTypes} from 'react';
export default class EvaItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		}
	}
	render() {
		const $items = this.state.data.map((item, key) => {
			return (
				<div key={key} className="pj-li borNo" id="pj-li">
					<div className="box flex">
						<img src={item.head_img}/>
						<span className="name flex-item">
							{item.name}
						</span>
					</div>
					<div className="pj-word">
						{item.eva_say}
					</div>
					<span className="time">
						{item.time}
					</span>
				</div>
			)
		});
		return (
			<div id='eva-box'>{$items}</div>
		);
	}
}
