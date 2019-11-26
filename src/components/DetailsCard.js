import React from "react"
import styled from 'styled-components'

const MainContainer = styled.div`
    height: 246px;
`

const Container = styled.div`
    display: flex;
    margin: 0px;
    padding: 0px;
`

const ImgStyled = styled.img`
    width: 328px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px 8px 0  0;
`
const Restaurant = styled.p`
    width: 328px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
    margin-top: 8px;
    margin-bottom: 8px;
`

const Category = styled.p`
    width: 104px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-top: 0px;
    margin-bottom: 8px;
`

const DeliveryTime = styled.p`
    width: 104px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-top: 0px;
    margin-right: 8px;
    margin-bottom: 10px;

`

const Shipping = styled.p`
    width: 104px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-top: 0px;
    margin-bottom: 10px;
`
const Address = styled.p`
    width: 328px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-top: 0px;
`

const DetailsCard = (props) => {
    return(
        <MainContainer>
            <ImgStyled src={props.img}/>
            <Restaurant>{props.name}</Restaurant>
            <Category>{props.category}</Category>
            <Container>
                <DeliveryTime>{props.time} min</DeliveryTime>
                <Shipping>Frete R${props.fret},00</Shipping>
            </Container>
            <Address>{props.address}</Address>
        </MainContainer>
    )
}

export default DetailsCard