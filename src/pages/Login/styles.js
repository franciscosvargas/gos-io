import styled from "styled-components";
import { Form } from '@unform/web';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height:100vh;
	justify-content:space-between;
`
export const Wrapper = styled.div`
	display: flex;
	justify-content:center;
	@media (max-width: 650px) {
        padding:0px 30px 50px 30px;
        margin-top: 0px;
		flex-wrap: wrap !important;
    }

`
export const InputGroup = styled(Form)`
    width: 550px;
    display: flex;
	flex-wrap: wrap;
	@media (max-width: 650px) {
        width:100vw;
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