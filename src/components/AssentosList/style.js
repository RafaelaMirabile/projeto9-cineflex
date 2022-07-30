import styled from "styled-components";

export const AssentosContainer=styled.div`
margin-top: 30px;
border : 2px solid green;
width :100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction : column;



`
export const Seats=styled.div`
border : 2px solid purple;
width: 325px;
flex-wrap: wrap;
display: flex;
justify-content: center;
align-items: center;

`

export const Seat =styled.div`
background: ${props => props.isSelected ? "#8DD7CF" : props.isAvailable ? "#C3CFD9" : "#FBE192"};
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
width: 26px;
height: 26px;
margin-left :6px;
margin-bottom: 6px

`
export const SeatsOPtions=styled.div`
border: 3px solid pink;
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
export const UserInfos=styled.div`
border : 2px solid red;
margin-top: 70px;
`


