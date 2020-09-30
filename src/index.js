import React from 'react';
import ReactDOM  from 'react-dom';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/auth/signup';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path='/' exact component={Welcome}></Route>
      <Route path='/signup' exact component={Signup}></Route>
    </App>
  </BrowserRouter>,
  document.querySelector('#root'))
