import React, {PropTypes} from 'react';

export default class Aside extends React.Component {
	render() {
		return (
			<aside id="list-aside" className="unsee">
				<div id="sidTar">
					<div className="change-brand clearfix">
						<a className="tit">品牌</a>
						<a className="on-theme">全部</a>
						<a>韩非诗</a>
						<a>韩非诗</a>
						<a>韩非诗</a>
						<a>云朵</a>
						<a>云朵</a>
					</div>
					<div className="change-brand clearfix">
						<a className="tit">排序方式</a>
						<a className="on-theme">综合排序</a>
						<a>销量从高到低</a>
						<a>销量从低到高</a>
						<a>销量从高到低</a>
						<a>销量从高到低</a>
					</div>
				</div>
			</aside>
		);
	}
}
