import styled from "styled-components";

export const AssentosContainer=styled.div`
margin-top: 40px;
width :100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction : column;
`
export const Seats=styled.div`
width: 325px;
flex-wrap: wrap;
display: flex;
justify-content: center;
align-items: center;
`
export const Seat =styled.div`
background: ${props => props.isSelected ? "#8DD7CF" : props.isAvailable ? "#C3CFD9" : "#FBE192"};
border-radius: 12px;
border: 1px solid ${props => props.isSelected ? "#1AAE9E" : props.isAvailable ? "#808F9D" : "#F7C52B"};
display: flex;
justify-content: center;
align-items: center;
width: 26px;
height: 26px;
margin-left :6px;
margin-bottom: 12px
`
export const SeatsOPtions=styled.div`
width: 325px;
display: flex;
justify-content: space-around;
`
export const Option = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
letter-spacing: -0.013em;
color: #4E5A65;
margin-top: 40px;
`
export const Rodape=styled.div`
    display: flex;
    min-height: 118px;
    width: 100%;
    background-color: #DFE6ED;
`
export const Banner=styled.div`

h2{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
color: #293845;
}
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 450px;
    padding : 10px;
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        margin-left: 6px
    }
`
export const Poster = styled.div`
    margin-right: 14px;
    border-radius: 2px;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    img{
        width: 48px;
        height: 72px;
    }
`

