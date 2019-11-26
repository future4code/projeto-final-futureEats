import React from "react"
import styled from 'styled-components'
import "typeface-roboto"

const MainContainer = styled.div`
    //height: 246px;
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
const mockRestaurantDetails = {
  restaurant: {
    description: "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
    shipping: 6,
    address: "Rua das Margaridas, 110 - Jardim das Flores",
    name: "Habibs",
    logoUrl: "http://soter.ninja/futureFoods/logos/habibs.jpg",
    deliveryTime: 60,
    category: "Árabe"
  }
}
const DetailsCard = (props) => {
    return(
        <MainContainer>
            <ImgStyled src={mockRestaurantDetails.restaurant.logoUrl}/>
            <Restaurant>{mockRestaurantDetails.restaurant.name}</Restaurant>
            <Category>{mockRestaurantDetails.restaurant.category}</Category>
            <Container>
                <DeliveryTime>{mockRestaurantDetails.restaurant.deliveryTime} min</DeliveryTime>
                <Shipping>Frete R${mockRestaurantDetails.restaurant.shipping},00</Shipping>
            </Container>
            <Address>{mockRestaurantDetails.restaurant.address}</Address>
        </MainContainer>
    )
}

export default DetailsCard