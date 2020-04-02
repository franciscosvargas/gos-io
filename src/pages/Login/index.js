import React from 'react';
import { injectIntl } from 'react-intl'

import { Container, InputGroup, Button, IconButton } from './styles';

import Topbar from '../../components/TopBar';
import TextInput from '../../components/TextInput';
import Footer from '../../components/Footer';

const Login = injectIntl(({intl}) => {

	const texts = {
		plholderCountry: intl.formatMessage({id: 'inputCountry'}),
		plholderCity: intl.formatMessage({id: 'inputCity'}),
		plholderCompany: intl.formatMessage({id: 'inputCompany'}),
		plholderState: intl.formatMessage({id: 'inputUF'}),
		plholderPassword: intl.formatMessage({id: 'inputPassword'}),
		buttonAccess: intl.formatMessage({id: 'buttonAccess'}),
		buttonDownloadApp: intl.formatMessage({id: 'buttonDownloadApp'})
	}

	return(
		<Container>
			<Topbar/>

			<InputGroup>
				<TextInput className="inputLogin" type="text" placeholder="CPF"/>
				<TextInput className="inputLogin" type="text" placeholder={texts.plholderCountry}/>
				<TextInput className="inputLogin" type="text" placeholder={texts.plholderCity}/>
				<TextInput className="inputLogin" type="text" placeholder={texts.plholderCompany}/>
				<TextInput className="inputLogin" type="text" placeholder={texts.plholderState}/>
				<TextInput className="inputLogin" type="text" placeholder={texts.plholderPassword}/>


				
				<Button>{texts.buttonAccess}</Button>

				<IconButton>{texts.buttonDownloadApp}</IconButton>
			</InputGroup>

			<Footer/>
      </Container>
	)

});

export default Login;
