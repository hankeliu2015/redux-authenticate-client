import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/signup';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/' exact component={Welcome}></Route>
        <Route path='/signup' exact component={Signup}></Route>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'))
