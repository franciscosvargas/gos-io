import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Container, Logo, TabRightBox, Link, ButtonLogin, Icon } from './styles.js'

import logo from '../../assets/logo.png'
import icUser from '../../assets/ic_user.png'

export default function TopBar() {
	return (
		<Container>
			<Logo src={logo} />
			<TabRightBox>
				<Link href="/#/about">
					<FormattedMessage id="linkAbout" />
				</Link>
				<Link href="/#/contact">
					<FormattedMessage id="linkContact" />
				</Link>
				<ButtonLogin href="/#/login">
					<Icon src={icUser}/>
					<FormattedMessage id="linkLogin" />
				</ButtonLogin>
			</TabRightBox>
			
		</Container>
	);
}
