import React, {PropTypes} from 'react';

export default class Prolist extends React.Component {
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
