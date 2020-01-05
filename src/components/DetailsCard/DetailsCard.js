import React from "react"
import styled from 'styled-components'
import "typeface-roboto"

const MainContainer = styled.div`
    //height: 246px;
`;

const Container = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
`;

const ImgStyled = styled.img`
    margin-top: 16px;
    width: 328px;
    height: 120px;
    object-fit: contain;
    border-radius: 8px 8px 0  0;
`;

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
`;

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
    margin-top: 0;
    margin-bottom: 8px;
`;

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
    margin-top: 0;
    margin-right: 8px;
    margin-bottom: 10px;

`;

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
    margin-top: 0;
    margin-bottom: 10px;
`;

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
    margin-top: 0;
`;

const DetailsCard = (props) => {
    return(
        <MainContainer>
            <ImgStyled src={props.restaurantDetails.logoUrl}/>
            <Restaurant>{props.restaurantDetails.name}</Restaurant>
            <Category>{props.restaurantDetails.category}</Category>
            <Container>
                <DeliveryTime>{props.restaurantDetails.deliveryTime} min</DeliveryTime>
                <Shipping>Frete R${props.restaurantDetails.shipping},00</Shipping>
            </Container>
            <Address>{props.restaurantDetails.address}</Address>
        </MainContainer>
    )
};

export default DetailsCard