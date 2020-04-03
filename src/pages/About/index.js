import React from 'react';
import { injectIntl } from 'react-intl'


import Topbar from '../../components/TopBar'
import Footer from '../../components/Footer'
import SideMenu from "../../components/SideMenu"

import { Container, Paragraph, TextContainer } from './styles'

import getTexts from '../../translation/about/utils'

const About =  injectIntl(({intl, match}) => {

	const { about } = match.params
	const texts = getTexts(intl.locale)
	const text = texts[about]

	return (
		<Container>

			<Topbar/>
			<SideMenu />

			<TextContainer>
				{ text.map((text, index) => (
					<Paragraph key={index}> {text} </Paragraph>
				))}
			</TextContainer>

			<Footer/>
			
		</Container>
	)

})

export default About;
