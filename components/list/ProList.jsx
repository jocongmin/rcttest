import React, {PropTypes} from 'react';
import {Link} from 'react-router'
const $data = [
	{
		src: 'abc.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
		pri: '￥350.00'
	}, {
		src: 'abc.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
		pri: '￥350.00'
	}, {
		src: 'abc.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
		pri: '￥350.00'
	}, {
		src: 'abc.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
		pri: '￥350.00'
	}, {
		src: 'abc.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
		pri: '￥350.00'
	}, {
		src: 'abc.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
		pri: '￥350.00'
	}, {
		src: 'abc.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
		pri: '￥350.00'
	}, {
		src: 'abc.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
		pri: '￥350.00'
	}, {
		src: 'abc.html',
		img: 'img/list-pro2.jpg',
		tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
		pri: '￥350.00'
	}
];
export default class ProList extends React.Component {
	render() {
		const $items = $data.map((item, key) => {
			return (
				<li key={key}>
					<Link to="/">
						<div className="item-box">
							<div className="pic">
								<img src={item.img}/>
							</div>
							<div className="tit">
								{item.tit}
							</div>
							<div className="pri-buy">
								<span>
									{item.pri}
								</span>
								<i className="ion"></i>
							</div>
						</div>
					</Link>
				</li>
			)
		})
		return (
			<div id="prolist" className="list clearfix">
				<ul className="clearfix">
					{$items}
				</ul>
			</div>
		);
	}
}
