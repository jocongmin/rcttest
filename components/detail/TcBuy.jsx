import React, {PropTypes} from 'react';
const $data = [
    {
        has: 1,
        guige: 200
    }, {
        has: 1,
        guige: 200
    }, {
        has: 0,
        guige: 200
    }, {
        has: 1,
        guige: 200
    }
];
export default class TcBuy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.show) {
            this.setState({isShow: true})
        }
    }
    hide() {
        this.setState({isShow: false})
    }
    sureAddBuy() {
        console.log(this.props.which, 'this.props.whichBtn') //记录到了是哪个btn点击的（立即购买或者加入购物车）
    }
    render() {
        return (
            <section id="tc-choice" className={this.state.isShow
                ? 'tc-choice'
                : 'tc-choice unsee'}>
                <div className="pro">
                    <div className="pic">
                        <img src="img/d-tc-pro.png"/>
                    </div>
                    <div className="info">
                        <h3>美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列美肌系列</h3>
                        <span>￥128</span>
                        <p>库存66件</p>
                    </div>
                    <i className="close" onClick={this.hide.bind(this)}></i>
                </div>
                <div className="over-box">
                    <div className="special">
                        <div className="tit">规格</div>
                        <div className="spe">
                            {$data.map(function(item, key) {
                                return (<Gitem key={key} has={item.has} guige={item.guige}/>)
                            })}
                        </div>
                    </div>
                    <div className="special">
                        <div className="tit">规格</div>
                        <div className="spe">
                            {$data.map(function(item, key) {
                                return (<Gitem key={key} has={item.has} guige={item.guige}/>)
                            })}
                        </div>
                    </div>
                    <div className="b-num">
                        <div className="tit">
                            数量
                        </div>
                        <NumInput/>
                    </div>
                </div>
                <div onClick={this.sureAddBuy.bind(this)} className="sure sure-on">
                    确认
                </div>
            </section>
        );
    }
}
class NumInput extends React.Component {
	constructor(props){
		super(props);
		this.state={
			num:1
		}
	}
	less(){
		if(this.state.num<=1){
			return
		}
		this.setState({
			num:this.state.num-1
		})
	}
	more(){
		this.setState({
			num:this.state.num+1
		})
	}
	render(){
		return(
			<div className="numc clearfix">
					<em onClick={this.less.bind(this)} className="emless fl">-</em>
					<span className="input-span fl on">{this.state.num}</span>
					<em onClick={this.more.bind(this)} className="emmore on fl">+</em>
			</div>
		)
	}
}

class Gitem extends React.Component {
		constructor(props){
			super(props);
			this.state={
				on:false
			}
		}
    classOn(event) {
				document.querySelector('#tc-choice .special em').classList.remove('on')
        event.target.classList.add('on');
    }
    render() {
        if (this.props.has == 0) {
            return (
                <em className="empty">{this.props.guige}ml</em>
            )
        }
        if (this.props.has == 1) {
            return (
                <em onClick={this.classOn.bind(this)} className='have-on'>{this.props.guige}ml</em>
            )
        }
    }
}
