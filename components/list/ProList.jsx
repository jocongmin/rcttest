import React, {PropTypes} from 'react';
import {Link} from 'react-router';
const $data = [
    {
        src: 'abc.html',
        img: 'img/list-pro2.jpg',
        tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
        pri: '￥350.00'
    }, {
        src: 'abc.html',
        img: 'img/list-pro2.jpg',
        tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
        pri: '￥350.00'
    }, {
        src: 'abc.html',
        img: 'img/list-pro2.jpg',
        tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
        pri: '￥350.00'
    }, {
        src: 'abc.html',
        img: 'img/list-pro2.jpg',
        tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
        pri: '￥350.00'
    }, {
        src: 'abc.html',
        img: 'img/list-pro2.jpg',
        tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
        pri: '￥350.00'
    }, {
        src: 'abc.html',
        img: 'img/list-pro2.jpg',
        tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
        pri: '￥350.00'
    }, {
        src: 'abc.html',
        img: 'img/list-pro2.jpg',
        tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
        pri: '￥350.00'
    }, {
        src: 'abc.html',
        img: 'img/list-pro2.jpg',
        tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
        pri: '￥350.00'
    }, {
        src: 'abc.html',
        img: 'img/list-pro2.jpg',
        tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
        pri: '￥350.00'
    }, {
        src: 'abc.html',
        img: 'img/list-pro2.jpg',
        tit: '葡萄籽靓晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化晳系列抗氧化护肤品套装淡化细纹补水',
        pri: '￥350.00'
    }
];
export default class ProList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: $data,
            nodata: false
        }

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.loadData) {
            setTimeout(() => {
                console.log('moredata')
                let newData = this.state.data.concat($data);
                if (newData.length >= 50) {
                    this.setState({nodata: true})
                    return
                }
                this.setState({data: newData})
            }, 500)
        }
    }
    shouldComponentUpdate(nextProps, nextStates) {
        if (!nextProps.loadData) {
            return nextProps.loadData !== this.props.loadData;
        }
        if (nextStates.nodata) {
            return false;
        }
        return true
    }
    render() {
        console.log('render')
        const $items = this.state.data.map((item, key) => {
            return (
                <Link to="/detail" key={key}>
                    <li>
                        <div className="item-box">
                            <div className="pic">
                                <img src={item.img}/>
                            </div>
                            <div className="tit">
                                {item.tit}
                            </div>
                            <div className="pri-buy">
                                <span>
                                    {item.pri}
                                </span>
                                <i className="ion"></i>
                            </div>
                        </div>
                    </li>
                </Link>
            )
        })
        return (
            <div id="prolist" className="list clearfix">
                <ul className="clearfix">
                    {$items}
                </ul>
            </div>
        );
    }
}
