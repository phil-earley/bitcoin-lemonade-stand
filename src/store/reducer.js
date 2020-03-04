const initalState = {
	transactions: [],
	loading: true,
	error: false,
}

const reducer = (state = initalState, action) => {
	if (action.type === 'FETCH_TRANSACTIONS_SUCCESS') {
		return {
			...state,
			transactions: [...state.transactions, action.body.data]
		};
	}

	if (action.type === 'SET_LOADING_STATE') {
		return {
			...state,
			loading: action.body
		}
	}

	if (action.type === 'FETCH_TRANSACTIONS_ERR') {
		return {
			...state,
			error: true
		}
	}

	if (action.type === 'RESET') {
		return {
			...initalState
		}
	}

	return state;
}

export default reducer;