import React from 'react'

import { Container, Logo, TabRightBox, Link, ButtonLogin, Icon } from './styles.js'

import logo from '../../assets/logo.png'
import icUser from '../../assets/ic_user.png'

export default function TopBar() {
	return (
		<Container>
			<Logo src={logo} />
			<TabRightBox>
				<Link>Sobre a Empresa</Link>
				<Link href="/#/contact">Contato</Link>
				<ButtonLogin href="/#/login">
					<Icon src={icUser}/>
					Acesse sua conta
				</ButtonLogin>
			</TabRightBox>
			
		</Container>
	);
}
