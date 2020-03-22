import React from 'react';

import { Container, Content, Side, Title, InputGroup, Required, Button, Span, IconButton } from './styles';

import Topbar from '../../components/TopBar';
import Footer from '../../components/Footer';

import TextInput from '../../components/TextInput';

import icWhats from '../../assets/ic_whatsapp.svg';


const Contact = () => (
    <Container>
        <Topbar/>
        <Content>
            <Side>
                <Title>Envie uma mensagem.</Title>
                <TextInput style={{marginTop: 70}}type="text" placeholder="Nome:" required/>
                <InputGroup>
                    <TextInput style={{width: 240}} type="text" placeholder="Email:" required/>
                    <TextInput style={{width: 240}} type="text" placeholder="Telefone:" />    
                </InputGroup>
                <textarea required placeholder="Escreva sua mensagem:"/>
                <Required>*Requerido</Required>
                <Button>ENVIAR</Button>
            </Side>

            <Side style={{marginLeft: '100px'}}>
                <Title>E-mail</Title>
                <Span style={{marginTop: 20}}>suporte@gos-io.tech</Span>
                <IconButton>
                    Contato Whatsapp
                    <img 
                        src={icWhats}
                        style={{marginLeft: 10}}
                    />
                </IconButton>

                <Title style={{marginTop: 50}}>Endereço</Title>
                <Span style={{marginTop: 20, width: 194}}>Praça Prefeito Antonio Carlos Barbosa - Nº 15 São Pedro da União 37.855.000 {<br/>}00.000.000/0000-00</Span>

            </Side>

            
        </Content>
        <Footer/>
    </Container>
);

export default Contact;
