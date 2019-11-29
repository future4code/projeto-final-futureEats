import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import 'typeface-roboto';


const CardWrapper = styled.div`
  padding-bottom: 8px;
`;

const PaperStyled = styled(Paper)`
  display: flex;
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`;

const TypographyTitle = styled(Typography)`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`;

const TypographyDescription = styled(Typography)`
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

const TypographyPrice = styled(Typography)`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;

const TypographyCounter = styled(Typography)`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #5cb646;
  padding: 7px 12px;
`;

const ImgStyled = styled.img`
  width: 96px;
  height: 109.5px;
  object-fit: cover;
  border-radius: 8px 0 0 8px; 
`;

const Counter = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 0 8px 0 8px;
  border: solid 1px #5cb646;
  margin-left: 198px;
`;

const CounterWrapper = styled.div`
  height: 0;
`;

const TitleWrapper = styled.div`
  height: 18px;
  width: 232px;
  margin: 18px 49px 0 16px;
`;

const DescriptionWrapper = styled.div`
  width: 200px;
  height: 30px;
  margin: 8px 16px 0 16px;
`;

const PriceWrapper = styled.div`
  width: 118px;
  height: 19px;
  margin: 4px 8px 0 16px;
`;

const ButtonWrapper = styled.div`
  width: 231px;
  display: flex;
  align-content: flex-start;
`;

const ButtonAddStyled = styled.button`
  margin-top: 6px;
  background-color: white;
  width: 90px;
  height: 31px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #5cb646;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: #5cb646;
  padding: 2.5px 21.5px;
`;
const ButtonRemoveStyled = styled.button`
  margin-top: 6px;
  background-color: white;
  width: 90px;
  height: 31px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #e02020;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: #e02020;
  padding: 2.5px 21.5px;
`
export const FoodsCard = (props) => {

  return (
      <CardWrapper>
        <PaperStyled elevation={1}>
          <ImgStyled
            src={props.product.photoUrl}
          />
           <div>
             {props.selectedQuantity !== 0 ?
             <CounterWrapper>
               <Counter>

                 <TypographyCounter>
                 {props.selectedQuantity}
                 </TypographyCounter>
               </Counter>
             </CounterWrapper> : ""}
               <TitleWrapper>
                 <TypographyTitle>
                   {props.product.name}
                 </TypographyTitle>
               </TitleWrapper>
             <DescriptionWrapper>
               <TypographyDescription>
                 {props.product.description}
               </TypographyDescription>
             </DescriptionWrapper>
             <ButtonWrapper>
               <PriceWrapper>
                 <TypographyPrice>
                   R${props.product.price.toFixed(2)}
                 </TypographyPrice>
               </PriceWrapper>
               {props.selectedQuantity === 0 ?
               <ButtonAddStyled size={"lg"} onClick={() => props.handleModal(props.product.id, 'lg')}>adicionar</ButtonAddStyled> :
                 <ButtonRemoveStyled onClick={() => props.handleRemoveItems}>remover</ButtonRemoveStyled>
               }
             </ButtonWrapper>
           </div>
        </PaperStyled>
      </CardWrapper>
  )
};
