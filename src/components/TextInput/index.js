import React from 'react';
import { FormattedMessage } from 'react-intl'
import { Container, Required } from './styles';

const TextInput = ({placeholder, type, style, required, className, mask}) => (

    <div className="div-input">
        <Container 
            required={required} 
            style={style}
            type={type}
            placeholder={placeholder}
            className={className}
            mask={mask}
        />

        { required ? (
            <Required>
				<FormattedMessage id="spanRequired"/>
			</Required>
        ) : null}

    </div>
    
);

export default TextInput;
