import React from "react";
import styled from 'styled-components'
import Roboto from 'typeface-roboto'

const MainContainer = styled.div`
    width: 328px;
    height: 188px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`

const Container = styled.div`
    display: flex;
    margin: 0px;
    padding: 0px;
`

const ImgStyled = styled.img`
    width: 328px;
    height: 120px;
    object-fit: contain;
    border-radius: 8px 8px 0  0;
`
const Restaurant = styled.p`
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
    margin-top: 12px;
    margin-bottom: 0px;
    margin-left: 16px;

`

const DeliveryTime = styled.p`
    width: 148px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-left: 16px;
    margin-top: 4px;
`

const Shipping = styled.p`
    width: 140px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    margin-right:16px;
    margin-top: 4px;
    color: #b8b8b8;
`


const RestaurantCard = (props) => {
    
    return(
        <MainContainer>
            <ImgStyled src={props.img} />
            <Restaurant>{props.name}</Restaurant>
            <Container>
                <DeliveryTime>{props.time} min</DeliveryTime>
                <Shipping>Frete R${props.fret},00</Shipping>
            </Container>
        </MainContainer>
    )
}

export default RestaurantCard;