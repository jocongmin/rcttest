import React, {PropTypes} from 'react';
import {Link} from 'react-router'
const $data = [
	{
		src: 'detail.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
		pri: '350.00'
	}, {
		src: 'detail.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
		pri: '350.00'
	}, {
		src: 'detail.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
		pri: '350.00'
	}, {
		src: 'detail.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
		pri: '350.00'
	}, {
		src: 'detail.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
		pri: '350.00'
	}, {
		src: 'detail.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
		pri: '350.00'
	}
];
export default class Prolist extends React.Component {
	render() {
		const $items = $data.map((item, key) => {
			return (
				<Link to='/list' key={key}>
					<li>
						<div className="item-box">
							<div className="pic">
								<img src={item.img}/>
							</div>
							<div className="tit">
								{item.tit}
							</div>
							<div className="pri-buy prolist-i">
								<span>
									{item.pri}
								</span>
							</div>
						</div>
					</li>
				</Link>
			)
		});
		return (
			<div id="prolist" className="list clearfix">
				<ul>
					{$items}
				</ul>
			</div>
		);
	}
}
