import React from 'react';
import { injectIntl } from 'react-intl'

import { Container, Content, Side, Title, InputGroup, Required, Button, Span, IconButton } from './styles';

import Topbar from '../../components/TopBar'
import Footer from '../../components/Footer'
import SideMenu from "../../components/SideMenu"

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
			<SideMenu />
			<Content>
				<Side style={{width: '48%'}}>
					<Title>{texts.title}</Title>
					<TextInput className="first-input" type="text" placeholder={texts.plholderName} required/>
					<InputGroup>
						<TextInput type="text" placeholder={texts.plholderEmail} required/>
						<TextInput type="text" placeholder={texts.plholderPhone} />    
					</InputGroup>
					<textarea required placeholder={texts.plholderMessage}/>
					<Required>{texts.spanRequired}</Required>
					<Button>{texts.buttonSend}</Button>
				</Side>

				<Side >
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
					<Span className="span-address">Praça Prefeito Antonio Carlos Barbosa - Nº 15{<br/>}São Pedro da União 37.855.000 {<br/>}00.000.000/0000-00</Span>

				</Side>
			</Content>
			<Footer/>
		</Container>
	)
});

export default Contact;
