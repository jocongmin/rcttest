import React, {PropTypes} from 'react';

export default class ProInfo extends React.Component {
	render() {
		return (
			<div className="details">
				<section className="tit">
					美肌系列美肌系列美肌
				</section>
				<section className="pri-item">
					<div className="pri">￥128</div>
					<del className="del-line">￥599</del>
					<span className="info">包邮</span>
				</section>
				<section>
					<div className="had-buy-num">
						1359人购买过
					</div>
				</section>
				<Authority/>
			</div>
		);
	}
}

export class Authority extends React.Component {
	render() {
		return (
			<section className="authority">
				<ul className="flex clearfix">
					<li className="zp flex-item">
						<em></em>
						<span>正品保证</span>
					</li>
					<li className="th flex-item">
						<em></em>
						<span>60天退货</span>
					</li>
					<li className="gf flex-item">
						<em></em>
						<span>官方授权</span>
					</li>
					<li className="fh flex-item">
						<em></em>
						<span>闪电发货</span>
					</li>
				</ul>
			</section>
		);
	}
}
