import styled from 'styled-components';
import InputMask from 'react-input-mask';
export const Container = styled(InputMask)`
    padding-bottom: 5px;
    border-bottom: 1px solid #767B7D !important;
    background: none;
    border: none;
	color: #767B7D;
	display:flex;
	flex-direction: column;
	font-size: 16px;
	min-width: 240px !important;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #767B7D;
    }
    :-ms-input-placeholder {
     color: #767B7D;
	}

	@media (max-width: 1250px) {
		width: 100% !important;
		flex-grow: 1 !important;
		margin-top: 25px;
	}

	@media (min-width: 600px) {
		flex-grow: 1 !important;
		margin-top: 25px;
	}


  
`;

export const Required = styled.span`
    color: #767B7D;
    font-size: 12px;
    margin-top: 5px;
`
    