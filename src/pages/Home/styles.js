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
	@media (max-width: 650px) {
		padding:100px 30px 50px 30px;
	}
	
`

export const Title = styled.span`
    color: #DBDEDF;
    font-size: 30px;
	line-height:40px;
    font-weight: 600;
	letter-spacing: 0.6px;
	@media (max-width: 650px) {
	font-size: 22px;
	line-height:30px;
	letter-spacing: 0.44px;
	}
`

export const ProductsBox = styled.div`
    margin-top: 40px;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 650px) {
		justify-content:center;
	}

	
`