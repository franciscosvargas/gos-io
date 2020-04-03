import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
	flex-direction: column;
	width: 100%;
`

export const Title = styled.span`
    color: #DBDEDF;
    font-size: 25px;
    font-weight: 600;
    margin-top: 100px;
`

export const ProductsBox = styled.div`
    margin-top: 50px;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 650px) {
		margin-bottom: 50px;
	}

	
`