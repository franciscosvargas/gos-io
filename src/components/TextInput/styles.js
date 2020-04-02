import styled from 'styled-components';

export const Container = styled.input`
    padding-bottom: 5px;
    border-bottom: 1px solid #B3B4B4 !important;
    background: none;
    border: none;
	color: #B3B4B4;
	display:flex;
	flex-direction: column;
	font-size: 16px;
	min-width: 240px !important;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #B3B4B4;
    }
    :-ms-input-placeholder {
     color: #B3B4B4;
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
    