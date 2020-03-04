import axios from 'axios';
const devUrl = 'https://g-blockchain-info-api.herokuapp.com';

function fetchTransactionsSuccess(body) {
	return {
		type: 'FETCH_TRANSACTIONS_SUCCESS',
		body,
	};
}

function fetchTransactionsErr(body) {
	return {
		type: 'FETCH_TRANSACTIONS_ERR',
		body,
	};
}

function setLoadingState(body) {
	return {
		type: 'SET_LOADING_STATE',
		body,
	};
}

export default function fetchTransactions(addresses) {
	return (dispatch) => {
		return axios.get(`${devUrl}/rawaddr/${addresses}`)
			.then(res => {
				return dispatch(fetchTransactionsSuccess(res));
			})
			.then(() => {
				return dispatch(setLoadingState(false))
			})
			.catch(err => {
				return dispatch(fetchTransactionsErr(err));
			});
	};
}
