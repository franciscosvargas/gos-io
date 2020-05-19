import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height:100vh;
    overflow-x: hidden;
	justify-content:space-between;
`

export const Title = styled.span`
    color: #DBDEDF;
    font-size: 25px;
    font-weight: 600;
    
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    padding:0px 100px;


    @media (max-width: 900px) {
        padding:0px 30px 50px 30px;
        margin-top: 0px;
		flex-wrap: wrap !important;
        align-items:center;
	}
`

export const InputGroup = styled.div`
	width: 100% !important;
    display: flex;
    flex-wrap: wrap;
	margin-top: 15px !important;
	justify-content: space-between;
	
`

export const Side = styled.div`
    display: flex;
	flex-direction: column;

	@media (max-width: 900px) {
		margin-top: 100px;
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
	
	@media (max-width: 900px) {
		width: 98%;
	}
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