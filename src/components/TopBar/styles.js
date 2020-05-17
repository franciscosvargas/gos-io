import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding:50px 100px 10px 100px;
    @media (max-width: 650px) {
        padding:30px 30px 0px 30px;
	}

`

export const Logo = styled.img`
    width: 216px;
    height: 72px;

	@media (max-width: 650px) {
    width: 152px;
    height: 50px;
	}

`

export const TabRightBox = styled.div`
	display: flex;
    margin-left: auto;
    height: 100%;
	justify-content: center;
`

export const Link = styled.a`
    color: #B3B4B4;
    font-size: 16px;
    margin-left: 30px;
    display: flex;
    align-items: center;

    :hover{
	opacity: 70%;
    }
	@media (max-width: 650px) {
		display: none;
	}
`

export const ButtonLogin = styled.a`
    color: #21AFE9;
    font-size: 16px;
    margin-left: 30px;
    display: flex;
	align-items: center;
	:hover{
	opacity: 70%;
    }
	@media (max-width: 650px) {
		display: none;
	}
`

export const Icon = styled.img`
    margin-right: 5px;
    width:30px;
    height:20px;
`
