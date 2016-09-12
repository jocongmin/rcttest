import React, {PropTypes} from 'react';
import {Link} from 'react-router';
export default class Nav extends React.Component {
	render() {
		return (
			<nav id="nav-footer">
				<ul>
					<li className="index on">
						<Link to='home'>
							<em className="on"></em>
							<br/>
							主页</Link>
					</li>
					<li className="ident">
						<Link to='list'>
							<em className=""></em>
							<br/>
							分类</Link>
					</li>
					<li className="buycar">
						<Link to='detail'>
							<em>
								<i>2</i>
							</em>
							<br/>
							购物车</Link>
					</li>
					<li className="me">
						<Link to='my'>
							<em></em>
							<br/>
							我的
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
