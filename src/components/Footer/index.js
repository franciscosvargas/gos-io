import React from 'react';
import { FormattedMessage } from 'react-intl'
import { Container, Copyright, TabRightBox, Link} from './styles';
import SelectIdioma from '../SelectIdioma'
const Footer = () => {
    return (
        <Container>
            <Copyright>
				<FormattedMessage id="copyright" />
			</Copyright>

            <TabRightBox>
                <SelectIdioma ></SelectIdioma>
                
                <Link>
					<FormattedMessage id="linkPrivacyPolice" />
				</Link>
            </TabRightBox>
    </Container>
    )
};


export default Footer;
