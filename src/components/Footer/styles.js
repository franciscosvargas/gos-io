import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding:34px 100px  27px 100px;
    border: 1px solid #303436;
	@media (max-width: 650px) {
		display: none;
	}

`
export const Copyright = styled.span`
    color: #767B7D;
    font-size: 14px;
`

export const TabRightBox = styled.div`
    margin-left: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
`

export const Link = styled.a`
    position: relative;
    color: #B3B4B4;
    font-size: 14px;
    margin-left: 30px;
`

export const Icon = styled.img`
    margin-right: -25px;
`




