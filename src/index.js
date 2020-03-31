import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import './index.css';
//import * as serviceWorker from './serviceWorker';

import Routes from './routes'

import { Provider } from 'react-redux';
import  Store  from './store';

import Translation from './translation/utils'

ReactDOM.render(
	<IntlProvider locale={navigator.language} messages={Translation(navigator.language)}>
		<Provider store={Store}>
    		<Routes/>
			{console.log(navigator.language)}
  		</Provider>
	</IntlProvider>
  ,
  document.getElementById('root')

);
//serviceWorker.unregister();
