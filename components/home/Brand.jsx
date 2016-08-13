import React, {PropTypes} from 'react';
import {Link} from 'react-router';
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
				<Link to='/test' key={key}>
					<li>
						<img src={item.src}/></li>
				</Link>
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
