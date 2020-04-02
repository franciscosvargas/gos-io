import React from 'react';
import { FormattedMessage } from 'react-intl'

import { Container, Icon, ButtonLogin, IconButton, Link, Bottom } from './styles';

import Arrow from '../../assets/ic_arrow.svg'
import icUser from '../../assets/ic_user.png'



const SideMenu = () => (
	<Container>
		<Icon src={Arrow}/>

		<ButtonLogin href="/#/login">
			<FormattedMessage id="linkLogin" />
			<IconButton src={icUser}/>
		</ButtonLogin>

		<Link href="/#/about">
			<FormattedMessage id="linkAbout" />
		</Link>

		<Link href="/#/contact">
			<FormattedMessage id="linkContact" />
		</Link>

		<Bottom>
			<Link href="/#/privacy-policy">
				<FormattedMessage id="linkPrivacyPolice" />
			</Link>
		</Bottom>
	</Container>
);

export default SideMenu;
