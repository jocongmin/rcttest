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
	componentDidMount() {
		window.addEventListener('scroll', this.loadData.bind(this), false)
	}
	render() {
		return (
			<div id='homePage'>
				<main>
					<Slider/>
					<Brand/>
					<Banner/>
					<Prolist loadData={this.state.loadData}/>
					<LoadNow ref='loadNow'/>
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
