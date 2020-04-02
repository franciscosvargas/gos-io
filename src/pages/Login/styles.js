import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

`
export const InputGroup = styled.div`
    width: 550px;
	margin-left: auto;
	margin-right: auto;
    margin-top: 100px;
    display: flex;
	flex-wrap: wrap;

	@media (max-width: 1250px) {
		width: 700px;
	}
	

	@media (max-width: 570px) {
		width: 100% !important;
		margin-left: 0 !important;
    	margin-right: 0 !important;
		
	}
`

export const Button = styled.button`
    margin-left: 20px;
    width: 150px;
    height: 40px;
    background: #21AFE9;
    color: #fff;
    margin-top: 42px;
    
	font-size: 16px;
	
	@media (max-width: 570px) {
		margin-bottom: 0px;
		width: 100%;
		
	}
`

export const IconButton = styled.a`
    padding: 8px;
    margin-left: 20px;
    color: #21AFE9;
    height: 22px;
    margin-top: 42px;
    font-size: 16px;
	border: 1px solid #21AFE9;
	display: flex;
	
	@media (max-width: 570px) {
		margin-top: 10px;
		margin-bottom: 0px;
		width: 100%;
		justify-content: center;
		
	}
`