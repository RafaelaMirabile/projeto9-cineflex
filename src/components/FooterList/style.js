import styled from "styled-components"

export const FooterContainer = styled.div`
width: 100%;
background: #DFE6ED;
border: 1px solid #9EADBA;

`
export const Title = styled.div`
display :flex;
justify-content: flex-start;
align-items: center;
padding : 10px;

img{
    width: 48px;
    height: 72px;
}

`
export const Poster = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
width: 64px;
display: flex;
justify-content: center;
align-items: center;
border : 2px solid yellow;
`
export const MovieName = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
color: #293845;
border : 2px solid green;
margin-left: 6px

`