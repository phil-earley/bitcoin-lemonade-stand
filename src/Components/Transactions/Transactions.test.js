import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Transactions } from './Transactions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

configure({ adapter: new Adapter() });

function setup(address = '1EReE5Qi2ugfz4HqCoDRFoECkE3nMg7wrt') {
	const props = {
		transactionArrays: [
			{
				address: {address},
				txs: [
					{
						out: [
							{
								addr: address,
								value: 1000000,
							}
						]
					}
				],
			},
		],
	}

	const shallowComponent = shallow(<Transactions {...props} />);

	return { shallowComponent, props }
}

describe('<Transactions />', () => {
	it('renders the container without crashing', () => {
		const { shallowComponent } = setup();
		expect(shallowComponent).toBeDefined();
	});

	it('renders the information on the page', () => {
		const { shallowComponent } = setup();
		expect(shallowComponent.find('.heading').length).toBe(1);
		expect(shallowComponent.find('TransactionCard').length).toBe(1);
	});

	it('does not render TransactionCard component when out address does not match checked address', () => {
		const { shallowComponent } = setup('3axzmfjo1szt18rruix');
		expect(shallowComponent.find('TransactionCard').length).toBe(0);
	});

	it('returns data when getExchangeRate is called', done => {
		var mock = new MockAdapter(axios);
		const data = { "USD": { "16m": 8930.96, "last": 8930.96, "buy": 8930.96, "sell": 8930.96, "symbol": "$" }, };
		mock.onGet('https://blockchain.info/ticker').reply(200, data);

		axios.get('https://blockchain.info/ticker')
			.then(res => expect(res.data).toEqual(data))
			done()
	});
});
