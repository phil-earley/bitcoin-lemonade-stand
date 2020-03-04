import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AddressCheck from './Components/AddressCheck/AddressCheck';
import Transactions from './Components/Transactions/Transactions';
import Navigation from './Components/Navigation/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route path="/" exact component={AddressCheck} />
        <Route path="/transactions/:addr" component={Transactions} />
      </div>
    )
  }
}

export default App;
