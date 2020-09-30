import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/signup';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <App>
        <Route path='/' exact component={Welcome}></Route>
        <Route path='/signup' exact component={Signup}></Route>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'))
