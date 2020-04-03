import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { FormattedMessage } from 'react-intl'

import { Container, Logo, TabRightBox, Link, ButtonLogin, Icon } from './styles.js'
import * as actions from '../../store/actions/topbar';

import logo from '../../assets/logo.png'
import icUser from '../../assets/ic_user.svg'
import icMenu from '../../assets/ic_menu.svg'

function TopBar({menuStatus}) {
	return (
		<Container>
			<a href="/#/">
				<Logo src={logo}  />
			</a>
			
			<TabRightBox>
				<Link href="/#/about/company">
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

			<Icon className="icon-topbar" onClick={() => menuStatus()}src={icMenu}/>
			
		</Container>
	);
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

const mapStateToProps = state => ({
	login: state.login
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
