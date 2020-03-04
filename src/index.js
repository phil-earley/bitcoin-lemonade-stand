import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;

	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</ BrowserRouter>
		</Provider>
		, document.getElementById('root')
	);
