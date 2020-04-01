import React from 'react';
import { injectIntl } from 'react-intl'


import Topbar from '../../components/TopBar'
import Footer from '../../components/Footer'

import { Container, Paragraph, TextContainer } from './styles'

import getTexts from '../../translation/about/utils'


const About =  injectIntl(({intl}) => {


	const { company } = getTexts(intl.locale)
	
	return (
		<Container>
			<Topbar/>

			<TextContainer>
				{ company.map((text, index) => (
					<Paragraph key={index}> {text} </Paragraph>
				))}
			</TextContainer>

			

			<Footer/>
		</Container>
	)

})

export default About;
