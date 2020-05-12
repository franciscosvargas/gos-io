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
export const Paragraph = styled.span`
	color: #DBDEDF;
	font-size: 18px;
	margin-bottom: 20px;
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`
