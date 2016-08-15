import React, {PropTypes} from 'react';

export default class TcBuy extends React.Component {
	render() {
		return (
			<section id="tc-choice" className="tc-choice unsee">
				<div className="pro">
					<div className="pic">
						<img src="img/d-tc-pro.png"/>
					</div>
					<div className="info">
						<h3>美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列</h3>
						<span>￥128</span>
						<p>库存66件</p>
					</div>
					<i className="close"></i>
				</div>
				<div className="over-box">
					<div className="special">
						<div className="tit">规格</div>
						<div className="spe">
							<span className="on">200ml</span>
							<span className="have-on">200ml</span>
							<span className="have-on">200ml</span>
							<span className="have-on">200ml</span>
							<span className="have-on">20ml</span>
							<span className="have-on">200ml</span>
							<span className="have-on">200ml</span>
							<span className="have-on">20ml</span>
							<span className="have-on">200ml</span>
							<span className="have-on">20ml</span>
							<span className="have-on">200ml</span>
							<span className="empty">200ml</span>
							<span className="empty">200ml</span>
							<span className="empty">10ml</span>
						</div>
					</div>
					<div className="special">
						<div className="tit">规格</div>
						<div className="spe">
							<span className="on">200ml</span>
							<span className="have-on">200ml</span>
							<span className="have-on">20ml</span>
							<span className="have-on">20ml</span>
							<span className="have-on">20ml</span>
							<span className="have-on">200ml</span>
							<span className="have-on">200ml</span>
							<span className="have-on">200ml</span>
							<span className="have-on">200ml</span>
							<span className="have-on">20ml</span>
							<span className="have-on">200ml</span>
							<span className="empty">200ml</span>
						</div>
					</div>
					<div className="b-num">
						<div className="tit">
							数量
						</div>
						<div className="numc clearfix">
							<em className="emless fl">-</em>
							<span className="input-span fl on">1</span>
							<em className="emmore on fl">+</em>
						</div>
					</div>
				</div>
				<div className="sure sure-on">
					确认
				</div>
			</section>
		);
	}
}
