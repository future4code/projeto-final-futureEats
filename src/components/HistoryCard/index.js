import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import PropTypes from 'prop-types';


const StyledCard = styled(Card)`
    margin-top:8px;
    width: 328px;
    height: 102px;
    border-radius:8px;
`

const StyledCardContent = styled(CardContent)`
    border-radius:8px;
    border: solid 1px #b8b8b8;
    width: 328px;
    height: 102px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    padding:16px ;
`

const StyledTypographyRestaurantTitle = styled(Typography)`
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
`

const StyledTypographyData = styled(Typography)`
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #000000;
`

const StyledTypographySubtotal = styled(Typography)`
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
`
const mockHistoryDetails = {
    product: {
        id: "CnKdjU6CyKakQDGHzNln",
        period: "21 de Setembro de 2019",
        value: "10.00",
        restaurantName: "Habbib's",
    }
};

const HistoryCard = (props) => {
    return (
        <StyledCard>
            <StyledCardContent >
                <StyledTypographyRestaurantTitle>{mockHistoryDetails.product.restaurantName}</StyledTypographyRestaurantTitle>
                <StyledTypographyData>{mockHistoryDetails.product.period}</StyledTypographyData>
                <StyledTypographySubtotal>Subtotal R${mockHistoryDetails.product.value}</StyledTypographySubtotal>
            </StyledCardContent>
        </StyledCard>
    );
}

export default HistoryCard;