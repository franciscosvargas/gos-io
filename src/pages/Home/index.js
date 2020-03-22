import React from 'react';

import { Container, Title, ProductsBox } from './styles';


import TopBar from "../../components/TopBar";
import Product from "../../components/HomeInfoBox";
import Footer from "../../components/Footer";

import icStore from '../../assets/ic_store.svg'
import icIOT from '../../assets/ic_iot.svg'
import icAI from '../../assets/ic_ai.svg'

const Home = () => (

    <Container>
        <TopBar/>
        <Title>Uma Startup Multiespecializada {<br/>} em Suporte Técnico B2B.</Title>
        <ProductsBox>
            <Product icon={icStore} name="MarketPlace" description="Foco em desenvolvimento de sistemas e-commerce, design e publicidade."/>
            <Product icon={icIOT} name="IoT Automation" description="Divisão técnica focada em análise e desenvolvimento de processos automáticos ou automatizáveis e internet das coisas."/>
            <Product icon={icAI} name="AI" description="Equipe responsável por desenvolver sistemas inteligentes de alta complexidade técnica e precisão em tempo real."/>
        </ProductsBox>
        <Footer/>
    </Container>
   
);

export default Home;
