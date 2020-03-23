import React, { useState } from 'react';

import { Container, Copyright, TabRightBox, Link, Icon, LanguagesList, Language } from './styles';

import icGlobal from '../../assets/ic_global.svg';

const Footer = () => {
    const [menu, setMenu] = useState(false)
    return (
        <Container>
            <Copyright>© 2020 Todos os direitos reservados.</Copyright>
            <TabRightBox>
                    <Icon src={icGlobal}/>
                    <Link onClick={() => { setMenu(!menu)}}>
                        Idioma
                        {menu ? (
                             <LanguagesList>
                             <Language>English</Language>
                             <Language>Espanhol</Language>
                             <Language className="selected">Português</Language>
                         </LanguagesList>
                        ): null}
                       
                    </Link>
                    <Link>Políticas de Privacidade</Link>
                </TabRightBox>
    </Container>
    )
};

export default Footer;
