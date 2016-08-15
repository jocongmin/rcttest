import React, {PropTypes} from 'react';
import EvaItem from './EvaItem.jsx';
import {Link} from 'react-router';
const $data = [
	{
		head_img: 'img/d-head.png',
		name: '周聪敏',
		eva_say: '应该是正品，质量非常好，不像是肯德基反馈数据大幅亏损的。好评～',
		time: '2015-26-03 05:15',
		back_say: '谢谢您的好评！'
	}
];
export default class Evaluate extends React.Component {
	render() {
		return (
			<section className="evaluate">
				<div className="tit flex">
					<span className="flex-item">商品评价(1980条)</span>
				</div>
				<EvaItem data={$data}/>
				<Link to='/evalist' className="search-btn">
					查看全部评价
				</Link>
				<div className="eh18"></div>
			</section>
		);
	}
}
