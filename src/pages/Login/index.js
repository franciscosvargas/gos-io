import React, { Component } from 'react';

import { Container, InputGroup, Button, IconButton } from './styles';

import Topbar from '../../components/TopBar';
import TextInput from '../../components/TextInput';
import Footer from '../../components/Footer';


export default class Login extends Component {
  render() {
    return (
      <Container>
        <Topbar/>

        <InputGroup>
          <TextInput className="inputLogin" type="text" placeholder="CPF"/>
          <TextInput className="inputLogin" type="text" placeholder="País"/>
          <TextInput className="inputLogin" type="text" placeholder="Cidade"/>
          <TextInput className="inputLogin" type="text" placeholder="Empresa (nickname)"/>
          <TextInput className="inputLogin" type="text" placeholder="Estado"/>
          <TextInput className="inputLogin" type="text" placeholder="Senha (mínimo 4 números)"/>

          <Button>ACESSAR</Button>

          <IconButton>BAIXAR APLICATIVO</IconButton>
        </InputGroup>

        <Footer/>
      </Container>
    );
  }
}

