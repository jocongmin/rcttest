import React, {PropTypes} from 'react';

export default class ListNav extends React.Component {
	render() {
		return (
			<div id="list-nav-list" className="nav clearfix">
				<ul className="flex">
					<li ref='first' className="first" id="first">
						<span className="on"></span>
					</li>
					<div className="scroll flex-item">
						<div className="box">
							<li>
								<span className="">全部</span>
							</li>
							<li>
								<span className="">打底</span>
							</li>
							<li>
								<span className="">面膜</span>
							</li>
							<li>
								<span className="">美笔</span>
							</li>
							<li>
								<span className="on">美笔</span>
							</li>
							<li>
								<span className="">面膜</span>
							</li>
							<li>
								<span className="">美笔</span>
							</li>
							<li>
								<span className="">美笔</span>
							</li>
							<li>
								<span className="">美笔</span>
							</li>
							<li>
								<span className="">筛选</span>
							</li>
							<li>
								<span className="">筛选</span>
							</li>
							<li>
								<span className="">筛选</span>
							</li>
							<li>
								<span className="">筛选</span>
							</li>
							<li>
								<span className="">筛选</span>
							</li>
							<li>
								<span className="">筛选</span>
							</li>
							<li>
								<span className="">筛选</span>
							</li>
							<li>
								<span className="">筛选</span>
							</li>
						</div>
					</div>
				</ul>
			</div>
		);
	}
}

}
