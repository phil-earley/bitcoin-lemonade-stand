import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import resetState from '../../store/actions/ResetState';

import './Navigation.css'

class Navigation extends Component {

	handleClick() {
		this.props.history.push('/');
		this.props.resetState()
	}

	render() {
		return (
			<div className="navigation">
				<div className="page-title">
					<h3 onClick={() => this.handleClick()} >BitCoin Lemonade Stand</h3>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		resetState,
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(Navigation);
