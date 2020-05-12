import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height:100vh;
	justify-content:space-between;
`
export const Wrapper = styled.div`
	padding:0px 100px;
`

export const Title = styled.span`
    color: #DBDEDF;
    font-size: 30px;
	line-height:40px;
    font-weight: 600;
    margin-top: 100px;
	letter-spacing: 0.6px;
`

export const ProductsBox = styled.div`
    margin-top: 50px;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 650px) {
		margin-bottom: 50px;
	}

	
`