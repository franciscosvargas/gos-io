import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl'

import { Container, Copyright, TabRightBox, Link, Icon, LanguagesList, Language } from './styles';

import icGlobal from '../../assets/ic_global.svg';

const Footer = () => {
    const [menu, setMenu] = useState(false)
    return (
        <Container>
            <Copyright>
				<FormattedMessage id="copyright" />
			</Copyright>

            <TabRightBox>
                <Link>
					<FormattedMessage id="linkPrivacyPolice" />
				</Link>
            </TabRightBox>
    </Container>
    )
};

export default Footer;
