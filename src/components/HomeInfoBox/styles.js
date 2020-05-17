import styled from "styled-components";

export const Container = styled.div`
    width: 240px;
    height:262px;
    background: #303436;
    box-shadow: 0px 3px 6px #00000029;
	margin-right: 40px;
	padding: 39px 20px 20px 20px;
	flex-shrink: 0; 
    display:flex;
    flex-direction:column;
    justify-content:space-between; 
    
    @media (max-width: 650px) {
    height:263px;
    width:260px;
    margin:0px 20px 30px 20px;
    padding: 40px 30px 20px 30px;
    
	}
	@media (max-width: 1160px) {
        flex-grow: 1;
        margin-bottom:50px;
		
	}

`
export const TitleBox = styled.div`
    display: flex;
`

export const Icon = styled.img`
`
export const Title = styled.span`
    color: #DBDEDF;
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
    @media (max-width: 650px) {
    font-size: 16px;
    line-height:22px;
    letter-spacing:0.32px;
	}
`
export const Description = styled.p`
    color: #B3B4B4;
    font-size: 16px;
    @media (max-width: 650px) {
    font-size: 14px;
    line-height:20px;
	}
`

export const Link = styled.a`

    color: #21AFE9;
    font-weight: 600;
    font-size: 14px;
    
`