import React, {PropTypes} from 'react';

export default class Nav extends React.Component {
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
