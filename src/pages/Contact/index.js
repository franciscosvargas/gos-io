import React from 'react';
import { injectIntl } from 'react-intl'

import { Container, Content, Side, Title, InputGroup, Required, Button, Span, IconButton } from './styles';

import Topbar from '../../components/TopBar'
import Footer from '../../components/Footer'

import TextInput from '../../components/TextInput'

import icWhats from '../../assets/ic_whatsapp.svg'

const Contact = injectIntl(({intl}) => {

	const texts = {
		title: intl.formatMessage({id: 'contactTitle'}),
		plholderName: intl.formatMessage({id: 'inputName'}),
		plholderEmail: intl.formatMessage({id: 'inputEmail'}),
		plholderPhone: intl.formatMessage({id: 'inputPhone'}),
		plholderMessage: intl.formatMessage({id: 'inputMessage'}),
		spanRequired: intl.formatMessage({id: 'spanRequired'}),
		spanAddress: intl.formatMessage({id: 'spanAddress'}),
		buttonSend: intl.formatMessage({id: 'buttonSend'}),
		buttonWhatsapp: intl.formatMessage({id: 'buttonWhatsapp'})
	}

	return (
		<Container>
			<Topbar/>
			<Content>
				<Side>
					<Title>{texts.title}</Title>
					<TextInput style={{marginTop: 70}}type="text" placeholder={texts.plholderName} required/>
					<InputGroup>
						<TextInput style={{width: 240}} type="text" placeholder={texts.plholderEmail} required/>
						<TextInput style={{width: 240}} type="text" placeholder={texts.plholderPhone} />    
					</InputGroup>
					<textarea required placeholder={texts.plholderMessage}/>
					<Required>{texts.spanRequired}</Required>
					<Button>{texts.buttonSend}</Button>
				</Side>

				<Side style={{marginLeft: '100px'}}>
					<Title>E-mail</Title>
					<Span style={{marginTop: 20}}>suporte@gos-io.tech</Span>
					<IconButton>
						{texts.buttonWhatsapp}
						<img 
							alt="Whatsapp Icon"
							src={icWhats}
							style={{marginLeft: 10}}
						/>
					</IconButton>

					<Title style={{marginTop: 50}}>{texts.spanAddress}</Title>
					<Span style={{marginTop: 20, width: 194}}>Praça Prefeito Antonio Carlos Barbosa - Nº 15 São Pedro da União 37.855.000 {<br/>}00.000.000/0000-00</Span>

				</Side>
			</Content>
			<Footer/>
		</Container>
	)
});

export default Contact;
