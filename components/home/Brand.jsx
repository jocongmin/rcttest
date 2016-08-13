import React, {PropTypes} from 'react';
const $data = [
	{
		src: 'img/i-brand.png'
	}, {
		src: 'img/i-brand.png'
	}, {
		src: 'img/i-brand.png'
	}, {
		src: 'img/i-brand.png'
	}
];
export default class Brand extends React.Component {
	render() {
		const $items = $data.map((item, key) => {
			return (
				<li key={key}>
					<img src={item.src}/></li>
			)
		})
		return (
			<div className="brand clearfix" id="index-brand">
				<ul>
					{$items}
				</ul>
			</div>
		);
	}
}
