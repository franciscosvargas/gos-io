import React from 'react';
import { FormattedMessage } from 'react-intl'

import { Container, Copyright, TabRightBox, Link } from './styles';

//import icGlobal from '../../assets/ic_global.svg';

const Footer = () => {
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
