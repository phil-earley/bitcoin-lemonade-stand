import React, {Component} from 'react';

import './AddressCheck.css';

class AddressCheck extends Component {
	constructor(props) {
		super(props);

		this.state = {
			addresses: [],
		};
	}

	handleInput() {
		let addresses = document.getElementsByClassName('btc-adress-input')[0].value.split(',');
		this.setState({ addresses });
	}

	handleClick(addresses) {
		this.props.history.push(`./transactions/${addresses}`);
	}

	render() {
		return (
			<div className="form">
				<form>
					<div>
						<h3>Enter BitCoin address(es)</h3>
						<h4>For Multiple – Separate with a Comma</h4>
					</div>
					<div>
						<input
							onChange={() => this.handleInput()}
							type="text"
							className="btc-adress-input"
							placeholder="1EReE5Qi2ugfz4HqCoDRFoECkE3nMg7wrt, 3Mjrfpf6JTzXG6o97Fwx8qXezNrcFaEqgN">
						</input>
					</div>
					<div className="button-container">
						<button onClick={() => this.handleClick(this.state.addresses)} className="button" >Check Account(s)</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddressCheck;
