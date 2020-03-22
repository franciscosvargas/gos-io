import React from 'react';

import { Container, Copyright, TabRightBox, Link, Icon } from './styles';

import icGlobal from '../../assets/ic_global.svg';

const Footer = () => (
    <Container>
        <Copyright>© 2020 Todos os direitos reservados.</Copyright>
        <TabRightBox>
                <Icon src={icGlobal}/>
				<Link>Idioma</Link>
				<Link>Políticas de Privacidade</Link>
			</TabRightBox>
    </Container>
);

export default Footer;
