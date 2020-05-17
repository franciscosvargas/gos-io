import styled,{css} from 'styled-components';



export const Link = styled.a`
    position: relative;
    color: #B3B4B4;
    font-size: 14px;
    margin-left: 30px;
    @media (max-width: 650px) {
		font-size: 16px;
    
	}
`

export const Icon = styled.img`
    margin-right: -25px;
`

export const LanguagesContainer = styled.div`
    position: relative;
`

export const LanguagesList = styled.ul`
    position: absolute;
    bottom:30px;
    right:0px;
    list-style:none;

    ${(props) =>
    props.isMenu &&
    css`
    
    left:-40px;
    `}
    
`



export const Language = styled.a`
    width: 120px;
    height:38px;
    background: #414648;
    color: #B3B4B4;
    font-size:13px;
    display:flex;
    align-items:center;
    justify-content:center;

    ${(props) =>
    !props.isMenu &&
    css`
	:hover {
        border: solid 1px #21AFE9;
        color:#21AFE9;
    }
    `}
    
    ${(props) =>
    props.isMenu &&
    css`
    :active {
        background:#FEFEFE;
    }
    width: 110px;
    background: #B3B4B4;
    color: #262B2D;
    `}

`




