import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {
	BuyBtn,
	Evaluate,
	ProInfo,
	ProListImg,
	SeeMore,
	Slider,
	TcBuy,
	TopBar
} from '../components/Detail.jsx';

export class Detail extends React.Component {
	render() {
		return (
			<div id='detail-page'>
				<div class="detail-header" id="detail-header">
					<TopBar title='商品详情'/>
					<Slider/>
					<ProInfo/>
				</div>
				<div class="detail-center" id="detail-center">
					<Evaluate/>
				</div>
				<SeeMore/>
				<ProListImg/>
				<BuyBtn/>
				<TcBuy/>
			</div>
		);
	}
}

export const mapStateToProps = (state) => {
	return {}
}

export const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
