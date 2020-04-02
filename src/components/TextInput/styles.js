import styled from 'styled-components';

export const Container = styled.input`
    padding-bottom: 5px;
    border-bottom: 1px solid #B3B4B4 !important;
    background: none;
    border: none;
    color: #B3B4B4;
    font-size: 16px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #B3B4B4;
    }
    :-ms-input-placeholder {
     color: #B3B4B4;
	}
	
	
	@media (max-width: 570px) {
		width: 295px !important;
		flex-grow: 1 !important;
		margin-top: 10px;
	}


  
`;

export const Required = styled.span`
    color: #767B7D;
    font-size: 12px;
    margin-top: 5px;
`
    