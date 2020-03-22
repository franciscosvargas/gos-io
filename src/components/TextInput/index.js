import React from 'react';

import { Container, Required } from './styles';

const TextInput = ({placeholder, type, style, required}) => (

    <div style={{display: 'flex', flexDirection: 'column'}}>
        <Container 
            required={required} 
            style={style}
            type={type}
            placeholder={placeholder}
        />

        { required ? (
            <Required>*Requerido</Required>
        ) : null}

    </div>
    
);

export default TextInput;
