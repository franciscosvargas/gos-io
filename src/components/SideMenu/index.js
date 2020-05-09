import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FormattedMessage } from 'react-intl';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { Container, Icon, ButtonLogin, IconButton, Link, Bottom } from './styles';
import * as actions from '../../store/actions/topbar';

import Arrow from '../../assets/ic_arrow.svg'
import icUser from '../../assets/ic_user.svg'
import TopBar from '../TopBar';


const SideMenu = ({menuStatus, menu}) => (

	<SwitchTransition>
				
		<CSSTransition key={menu ? "Goodbye, world!" : "Hello, world!"} in={menu} timeout={200} classNames="my-node" >
		
			{menu ? (
				<Container>
					<Icon onClick={() => menuStatus()} src={Arrow}/>

					<ButtonLogin onClick={() => menuStatus()} href="/#/login">
						<FormattedMessage id="linkLogin" />
						<IconButton src={icUser}/>
					</ButtonLogin>

					<Link onClick={() => menuStatus()} href="/#/about/company">
						<FormattedMessage id="linkAbout" />
					</Link>

					<Link onClick={() => menuStatus()} href="/#/contact">
						<FormattedMessage id="linkContact" />
					</Link>

					<Bottom>
						<Link onClick={() => menuStatus()} href="/#/privacy-policy">
							<FormattedMessage id="linkPrivacyPolice" />
						</Link>
					</Bottom>
				</Container>
			) : <div style={{display:'none'}}></div>}
		</CSSTransition>
	</SwitchTransition>
	
);


const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

const mapStateToProps = state => ({
	login: state.login,
	menu: state.topbar.menu
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)

