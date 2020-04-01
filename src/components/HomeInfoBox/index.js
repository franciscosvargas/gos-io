import React from 'react';
import { FormattedMessage } from 'react-intl'

import { Container, Icon, TitleBox, Title, Description, Link } from './styles';


const HomeInfoBox = ({icon, name, description}) => (
    <Container> 
        <TitleBox>
            <Icon src={icon} />
            <Title>GOS-IO {<br/>} {name}</Title>
        </TitleBox>
        <Description>{description}</Description>
        <Link>
			<FormattedMessage id="spanSeeMore"/>
		</Link>
        
    </Container>
);

export default HomeInfoBox;
