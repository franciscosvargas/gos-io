import React from 'react';
import ReactDOM from 'react-dom';
import {PersistGate} from 'redux-persist/integration/react'
import { IntlProvider } from 'react-intl';
import './index.css';
import Routes from './routes'

import { Provider } from 'react-redux';
import{ store, persistor} from './store';

import Translation from './translation/utils'



function getLanguage(){
	let data=JSON.parse(window.localStorage.getItem('persist:root'))
	let {languages} =data
	return JSON.parse(languages).language
}
let b=getLanguage()
ReactDOM.render(

	<Provider store={store}>
		<PersistGate persistor={persistor} >
		<IntlProvider locale={b} messages={Translation(b)}>
	
			<Routes />
		</IntlProvider>
		</PersistGate>
	</Provider>

	,
	document.getElementById('root')

);
//serviceWorker.unregister();
