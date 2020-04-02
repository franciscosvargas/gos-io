import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;   
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    color: #DBDEDF;
    font-size: 25px;
    font-weight: 600;
    
`

export const Content = styled.div`
    display: flex;
	margin-top: 130px;
	flex-direction: row;

	@media (max-width: 570px) {
		margin-top: 70px;
		flex-wrap: wrap !important;
		
	}
`

export const InputGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px !important;
    justify-content: space-between;
`

export const Side = styled.div`
    width: 48%;
    display: flex;
	flex-direction: column;
	flex-grow: 1;


	@media (max-width: 570px) {
		margin-top: 50px;
		flex-grow: 1;
		width: 100%;
		margin-left: 0 !important;
		
	}
`

export const Required = styled.span`
    color: #767B7D;
    font-size: 12px;
    margin-top: 5px;
`

export const Button = styled.button`
    width: 150px;
    height: 40px;
    background: #21AFE9;
    color: #fff;
    margin-top: 42px;
    font-size: 16px;
`

export const Span = styled.span`
    color: #DBDEDF;
    font-size: 18px;
`

export const IconButton = styled.a`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 170px;
    padding: 10px;
    color: #21AFE9;
    border: 1px solid #21AFE9;
`