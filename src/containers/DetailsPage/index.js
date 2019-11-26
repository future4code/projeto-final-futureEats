import {FoodsCard} from "../../components/FoodsCard"
import "typeface-roboto";
import DetailsCard from "../../components/DetailsCard";
import {Typography} from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import Divider from "@material-ui/core/Divider";

const DetailsPageContainer = styled.div`
  display: grid;
  justify-items: center;
`;
const SectionTitleWrapper = styled.div`
  width: 328px;
  height: 18px;
  padding: 16px 16px 8px 16px;
`;
const TypographyStyled = styled(Typography)`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;


export const DetailsPage = () => {
  return (
    <DetailsPageContainer>
      <DetailsCard/>
      <FoodsCard/>
      <SectionTitleWrapper>
        <TypographyStyled>

          <Divider />
        </TypographyStyled>
      </SectionTitleWrapper>
    </DetailsPageContainer>
  )
};

