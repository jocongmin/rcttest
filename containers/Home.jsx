import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    BackTop,
    Banner,
    Brand,
    LoadNow,
    Nav,
    Prolist,
    Slider
} from '../components/Home.jsx'
export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadData: false
        }
        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        let loadState = this.refs.loadNow.detect();
        console.log(loadState)
        if (loadState) {
            this.setState({loadData: true})
        } else {
            this.setState({loadData: false})
        }
    }
    shouldComponentUpdate(nextProps, nextStates) {
        if (!nextStates.loadData) {
            return false;
        }
        return true;
    }
    routerWillLeave(nextLocation) {
				console.log('homeleave')
				console.log(nextLocation,'nextLocation')
        window.removeEventListener('scroll', this.loadData,false)
    }
    componentDidMount() {
			  this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave.bind(this))
        window.addEventListener('scroll', this.loadData,false)
    }
    componentWillUnMount() {
        window.removeEventListener('scroll', this.loadData)
    }
    render() {
        return (
            <div id='homePage'>
                <main>
                    <Slider/>
                    <Brand/>
                    <Banner/>
                    <Prolist scrollEvent={this.loadData} loadData={this.state.loadData}/>
                    <LoadNow ref='loadNow'/>
                    <BackTop/>
                </main>
                <Nav/>
            </div>
        )
    }
}
Home.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export const mapStateToProps = (state) => {
    return {}
}

export const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
