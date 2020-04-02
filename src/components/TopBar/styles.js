import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

`

export const Logo = styled.img`
    width: 216px;
    height: 72px
`

export const TabRightBox = styled.div`
	display: flex;
    margin-left: auto;
    height: 100%;
	justify-content: center;

	@media (max-width: 650px) {
		display: none;
	}

`

export const Link = styled.a`
    color: #B3B4B4;
    font-size: 14px;
    margin-left: 30px;
`

export const ButtonLogin = styled.a`
    color: #21AFE9;
    font-size: 14px;
    margin-left: 30px;
    display: flex;
    align-items: center;
`

export const Icon = styled.img`
    margin-right: 5px
`
