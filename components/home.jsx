import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export class Home extends React.Component {
	render() {
		return (
			<div id='homePage'>
				<main>
					<Slider/>
					<Brand/>
					<Banner/>
					<Prolist/>
					<LoadNow/>
					<BackTop/>
				</main>
				<Nav/>
			</div>
		)
	}
}

export const mapStateToProps = (state) => {
	return {}
}

export const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export class Slider extends React.Component {
	render() {
		return (
			<div className="carousel" id="index-carousel">
				<div className="lunbo"><img src="img/i-lunbo.png"/></div>
			</div>
		);
	}
}

export class Brand extends React.Component {
	render() {
		return (
			<div className="brand clearfix" id="index-brand">
				<ul>
					<li>
						<img src="img/i-brand.png"/></li>
					<li>
						<img src="img/i-brand.png"/></li>
					<li>
						<img src="img/i-brand.png"/></li>
					<li>
						<img src="img/i-brand.png"/></li>
				</ul>
			</div>
		);
	}
}

export class Banner extends React.Component {
	render() {
		return (
			<div className="banner" id="index-banner">
				<div className="box">
					<a href="list.html">
						<img src="img/i-banner.png"/>
						<span>全场的说法或类似的纠纷包邮 满300减50</span>
					</a>
				</div>
				<div className="box">
					<a href="list.html">
						<img src="img/i-banner.png"/>
						<span>全场收到了开放接口包邮 满300减50</span>
					</a>
				</div>
			</div>
		);
	}
}

export class Prolist extends React.Component {
	render() {
		return (
			<div id="prolist" className="list clearfix">
				<ul>
					<li>
						<a href="detail.html">
							<div className="item-box">
								<div className="pic">
									<img src="img/list-pro2.jpg"/>
								</div>
								<div className="tit">
									葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水
								</div>
								<div className="pri-buy prolist-i">
									<span>
										￥350.00
									</span>
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export class LoadNow extends React.Component {
	render() {
		return (
			<div className="pullUp loading more unsee">
				<span className="pullUpIcon"></span>
				<span className="pullUpLabel">数据加载中...</span>
			</div>
		);
	}
}

export class Nav extends React.Component {
	render() {
		return (
			<nav id="nav-footer">
				<ul>
					<li className="index on">
						<a href="index.html">
							<em className="on"></em>
							<br/>
							主页</a>
					</li>
					<li className="ident">
						<a href="list.html">
							<em className=""></em>
							<br/>
							分类</a>
					</li>
					<li className="buycar">
						<a href="buy_car.html">
							<em>
								<i>2</i>
							</em>
							<br/>
							购物车</a>
					</li>
					<li className="me">
						<a href="my_page.html">
							<em></em>
							<br/>
							我的</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export class BackTop extends React.Component {
	render() {
		return (
			<div className="backtop"></div>
		);
	}
}
