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
	TopBar,
	BackTop
} from '../components/Detail.jsx';

export class Detail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tcShow: false,
			whichBtn: ''
		}
	}
	showTc(which) {
		console.log(which, 'which')
		this.setState({tcShow: true, whichBtn: which})
	}
	componentDidMount(){
		window.scroll(0,0)
	}
	render() {
		return (
			<div id='detail-page'>
				<div class="detail-header" id="detail-header">
					<TopBar title='商品详情'/>
					<Slider/>
					<ProInfo/>
					<BackTop/>
				</div>
				<div class="detail-center" id="detail-center">
					<Evaluate/>
				</div>
				<SeeMore/>
				<ProListImg/>
				<BuyBtn showTc={this.showTc.bind(this)}/>
				<TcBuy which={this.state.whichBtn} show={this.state.tcShow}/>
			</div>
		);
	}
}

export const mapStateToProps = (state) => {
	return {}
}

export const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
