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
