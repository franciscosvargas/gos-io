import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 90px;
	padding-bottom: 40px;
	
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
    justify-content: center
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

export const LanguagesList = styled.ul`
    position: absolute;
    top: -550%;
    list-style:none;
`

export const Language = styled.li`
    width: 120px;
    padding: 6px;
    background: #DBDEDF;
    opacity: 0.8;
    color: #262B2D;
    font-weight: 600;

    :hover {
        opacity: 1;
    }

`



