import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {
	ListNav,
	ListSlider,
	ProList,
	Nav,
	LoadNow,
	Aside,
	BackTop
} from '../components/List.jsx';

export class List extends React.Component {
	componentDidMount() {
		(function () {
			var winHeight = window.innerHeight;
			var _first = document.querySelector('#first');
			var mainbox = document.querySelector('#mainbox');
			var sidbox = document.querySelector('#list-aside');
			var rotateTar = document.querySelector('#rotateTar');
			var sidTar = document.querySelector('#sidTar');
			var nav = document.querySelector('#nav-footer');
			var rotateBox = document.querySelector('.rotateBox');
			var footerNav = document.getElementById('nav-footer');
			var _body = document.querySelector('body');
			var footerHeight = footerNav.offsetHeight;
			var rotateBoxHeight = winHeight - footerHeight;
			_body.setAttribute('style', 'height:' + winHeight + 'px;overflow-y:hidden;');
			rotateBox.setAttribute('style', 'height:' + rotateBoxHeight + 'px;overflow-y:scroll');

			_first.onclick = function (e) {
				sidShow();
				e.stopPropagation();
			}
			rotateTar.onclick = function () {
				sidHide();
			}

			function sidShow() {
				var showHeight = winHeight;
				rotateBox.setAttribute('style', 'height:' + showHeight + 'px;overflow-y:hidden;');
				nav.style.display = 'none';
				mainbox.setAttribute("style", "");
				mainbox.className = 'rotate noevent';
				rotateTar.className = 'event';
				sidbox.className = 'on';
				rotateBox.className += ' noevent';
			}

			function sidHide() {
				mainbox.removeAttribute("style");
				rotateTar.className = '';
				sidbox.className = '';
				setTimeout(function () {
					mainbox.className = '';
					nav.removeAttribute('style');
					rotateBox.setAttribute('style', 'height:' + rotateBoxHeight + 'px;overflow-y:scroll');
				}, 250);
				rotateBox.className = 'rotateBox';
			}
		})()
	}
	render() {
		return (
			<div id='list-page'>
				<main id="mainbox">
					<div id="rotateTar">
						<div className="rotateBox">
							<ListSlider/>
							<ListNav ref='listnav'/>
							<ProList/>
							<LoadNow/>
							<BackTop/>
						</div>
					</div>
				</main>
				<Nav/>
				<Aside/>
			</div>
		)
	}
}

export const mapStateToProps = (state) => {
	return {}
}

export const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(List);
