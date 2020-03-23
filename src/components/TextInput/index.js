import React from 'react';

import { Container, Required } from './styles';

const TextInput = ({placeholder, type, style, required, className}) => (

    <div style={{display: 'flex', flexDirection: 'column'}}>
        <Container 
            required={required} 
            style={style}
            type={type}
            placeholder={placeholder}
            className={className}
        />

        { required ? (
            <Required>*Requerido</Required>
        ) : null}

    </div>
    
);

export default TextInput;
