import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import * as serviceWorker from './serviceWorker';

import Routes from './routes'

import { Provider } from 'react-redux';
import  Store  from './store';

ReactDOM.render(
  <Provider store={Store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')

);
serviceWorker.unregister();
