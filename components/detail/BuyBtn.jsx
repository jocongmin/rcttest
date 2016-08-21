import React, {PropTypes} from 'react';

export default class BuyBtn extends React.Component {
	render() {
		return (
			<section id="buy-btn" className="buy-btn flex">
				<div className="add flex-item clearfix">
					<div className="car-num fl">
						<em>
							<i>12</i>
						</em>
					</div>
					<div className="save fl">
						<i></i>
						<em></em>
					</div>
				</div>
				<a onClick={this.props.showTc.bind(this, 'fastBuy')} className="fast-buy flex-item">
					立即购买
				</a>
				<a onClick={this.props.showTc.bind(this, 'addCart')} className="add-cart flex-item">
					加入购物车
				</a>
			</section>
		);
	}
}
