import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { FormattedMessage, injectIntl } from 'react-intl'

import { Container, Title, ProductsBox ,Wrapper} from './styles'

import TopBar from "../../components/TopBar"
import Product from "../../components/HomeInfoBox"
import Footer from "../../components/Footer"
import SideMenu from "../../components/SideMenu"

import icStore from '../../assets/ic_store.svg'
import icIOT from '../../assets/ic_iot.svg'
import icAI from '../../assets/ic_ai.svg'


const Home = injectIntl(({intl, menu}) => {

	const descriptions = {
		marketplace: intl.formatMessage({id: 'marketplaceDescription'}),
		automation: intl.formatMessage({id: 'automationDescription'}),
		ai: intl.formatMessage({id: 'aiDescription'})
	}

	return (
		<Container>

			<SideMenu />

			<TopBar/>
			<Wrapper>
			<Title> 
				<FormattedMessage id="homeTitle1"/>
				{<br/>} 
				<FormattedMessage id="homeTitle2"/>
				
			</Title>
					<ProductsBox>
				<Product href="/#/about/marketplace" icon={icStore} name="MarketPlace" description={descriptions.marketplace}/>
				<Product href="/#/about/automation" icon={icIOT} name="IoT Automation" description={descriptions.automation}/>
				<Product href="/#/about/ai" icon={icAI} name="AI" description={descriptions.ai} />
			</ProductsBox>
				</Wrapper>
			
			
		
			<Footer/>
		</Container>
   )
})

const mapStateToProps = state => ({
	menu: state.topbar.menu
});

export default connect(mapStateToProps)(Home)
