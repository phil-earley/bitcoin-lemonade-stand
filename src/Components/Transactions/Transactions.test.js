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
				address: '1EReE5Qi2ugfz4HqCoDRFoECkE3nMg7wrt',
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
	it('renders without crashing', () => {
		const { shallowComponent } = setup();
		expect(shallowComponent).toBeDefined();
	});

	it('renders the information on the page', () => {
		const { shallowComponent } = setup();
		expect(shallowComponent.find('.important').length).toBe(1);
		expect(shallowComponent.find('TransactionCard').length).toBe(1);
	});

	it('does not render TransactionCard component when out address does not match checked address', () => {
		const { shallowComponent } = setup('2389tyhskdjjr8h93uogirwhogw');
		expect(shallowComponent.find('TransactionCard').length).toBe(0);
	});

	it('returns data when getExchangeRate is called', done => {
		var mock = new MockAdapter(axios);
		const data = { "USD": { "15m": 478.68, "last": 478.68, "buy": 478.55, "sell": 478.68, "symbol": "$" }, };
		mock.onGet('https://blockchain.info/ticker').reply(200, data);

		axios.get('https://blockchain.info/ticker')
			.then(res => expect(res.data).toEqual(data))
			done()
	});
});
