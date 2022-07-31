import styled from "styled-components";

export const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 68px 24px;
`
export const Heading = styled.h2 `

    padding: 30px 0 50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
`

export const Info = styled.div `
    width: 100%;

    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`
export const Button = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    border-radius: 3px;
    width: 225px;
    height: 43px;
    background-color: #E8833A;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    cursor: pointer;
`

