import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'

import { Container, Title, ProductsBox } from './styles'

import TopBar from "../../components/TopBar"
import Product from "../../components/HomeInfoBox"
import Footer from "../../components/Footer"
import SideMenu from "../../components/SideMenu"

import icStore from '../../assets/ic_store.svg'
import icIOT from '../../assets/ic_iot.svg'
import icAI from '../../assets/ic_ai.svg'

const Home = injectIntl(({intl}) => {

	const descriptions = {
		marketplace: intl.formatMessage({id: 'marketplaceDescription'}),
		automation: intl.formatMessage({id: 'automationDescription'}),
		ai: intl.formatMessage({id: 'aiDescription'})
	}

	return (
		<Container>
			<SideMenu/>
			<TopBar/>
			<Title> 
				<FormattedMessage id="homeTitle1"/>
				{<br/>} 
				<FormattedMessage id="homeTitle2"/>
			</Title>
			<ProductsBox>
				<Product icon={icStore} name="MarketPlace" description={descriptions.marketplace}/>
				<Product icon={icIOT} name="IoT Automation" description={descriptions.automation}/>
				<Product icon={icAI} name="AI" description={descriptions.ai} />
			</ProductsBox>
			<Footer/>
		</Container>
   )
})


export default Home;
