import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {TopBar, EvaTit, EvaItem, BuyBtn} from '../components/EvaList.jsx';
const data = [
	{
		head_img: 'img/d-head.png',
		name: '周聪敏',
		eva_say: '应该是正品，质量非常好，不像是肯德基反馈数据大幅亏损的。好评～',
		time: '2015-26-03 05:15',
		back_say: '谢谢您的好评！'
	}, {
		head_img: 'img/d-head.png',
		name: '周聪敏',
		eva_say: '应该是正品，质量非常好，不像是肯德基反馈数据大幅亏损的。好评～',
		time: '2015-26-03 05:15',
		back_say: '谢谢您的好评！'
	}, {
		head_img: 'img/d-head.png',
		name: '周聪敏',
		eva_say: '应该是正品，质量非常好，不像是肯德基反馈数据大幅亏损的。好评～',
		time: '2015-26-03 05:15',
		back_say: '谢谢您的好评！'
	}, {
		head_img: 'img/d-head.png',
		name: '周聪敏',
		eva_say: '应该是正品，质量非常好，不像是肯德基反馈数据大幅亏损的。好评～',
		time: '2015-26-03 05:15',
		back_say: '谢谢您的好评！'
	}, {
		head_img: 'img/d-head.png',
		name: '周聪敏',
		eva_say: '应该是正品，质量非常好，不像是肯德基反馈数据大幅亏损的。好评～',
		time: '2015-26-03 05:15',
		back_say: '谢谢您的好评！'
	}, {
		head_img: 'img/d-head.png',
		name: '周聪敏',
		eva_say: '应该是正品，质量非常好，不像是肯德基反馈数据大幅亏损的。好评～',
		time: '2015-26-03 05:15',
		back_say: '谢谢您的好评！'
	}
]
export class EvaList extends React.Component {
	render() {
		return (
			<div id='eva-page'>
				<TopBar title='商品评价'/>
				<main>
					<EvaTit/>
					<div className="evaluate">
						<EvaItem data={data}/>
						<div className="nmore">已经到最底部了</div>
					</div>
				</main>
				<BuyBtn/>
			</div>
		)
	}
}

export const mapStateToProps = (state) => {
	return {}
}

export const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(EvaList);;
