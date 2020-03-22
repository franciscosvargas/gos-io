import React from 'react';

import { Container, Icon, TitleBox, Title, Description, Link } from './styles';


const HomeInfoBox = ({icon, name, description}) => (
    <Container> 
        <TitleBox>
            <Icon src={icon} />
            <Title>GOS-IO {<br/>} {name}</Title>
        </TitleBox>
        <Description>{description}</Description>
        <Link>Saiba Mais</Link>
        
    </Container>
);

export default HomeInfoBox;
