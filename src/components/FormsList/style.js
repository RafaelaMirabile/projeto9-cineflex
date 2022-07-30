import styled from "styled-components";

export const FormContainer = styled.div`
border : 2px solid red;
margin-top: 60px;
width: 325px;

p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #293845;
margin-bottom: 4px;
}

form > div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
}
`

export const Info=styled.div`
margin-bottom: 24px;

input{
width: 318px;
height: 51px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
font-style: italic;
font-family: 'Roboto';
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #AFAFAF;
}
`
export const Button=styled.button`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px solid #FFFFFF;
border: 0px;
outline: none;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
text-align: center;
letter-spacing: 0.04em;
color: #FFFFFF;
`

export const User=styled.div`
border : 2px solid green;
`