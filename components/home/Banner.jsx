import React, {PropTypes} from 'react';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }
    render() {
        return (
            <div className="banner" id="index-banner">
                <div className="box">
                    <img src="img/i-banner.png"/>
                    <span>全场的说法或类似的纠纷包邮 满300减50</span>
                </div>
                <div className="box">
                    <img src="img/i-banner.png"/>
                    <span>全场收到了开放接口包邮 满300减50</span>
                </div>
            </div>
        );
    }
}
