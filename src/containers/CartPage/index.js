import React, { useState } from "react";
import styled from 'styled-components';
import 'typeface-roboto';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from "../../components/Menu/Menu"

const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 100vw;
    justify-content:center;
    align-Items: center;
`

const Title = styled.div`
    width: 360px;
    height: 42px;
`

const Text = styled.p`
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
    margin:12px 32px 12px 32px;
`

const StyledTextField = styled(TextField)`
    width: 360px;
    background-color: #eeeeee;
`

const StyledBoxTextField = styled.div`
    width: 360px;
    height: 76px;
`

const StyledButtonSubmit = styled(Button)`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color: #5cb646;
    padding:0;
    margin: 8px 16px 36px 16px;
`

const StyledContentButton = styled(Typography)`
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
    margin:12px 16px 12px 16px;    
`

const StyledBoxButton = styled.div`
    width: 360px;
    height: 72px;
`

const StyledTotal = styled.div`
    display:flex;
    flex-direction:row;
`

const StyledSubtotal = styled.div`
    width: 164px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    margin-left:0;
`

const StyledSoma = styled.div`
    width: 164px;
    height: 18px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.43px;
    text-align: right;
    color: #5cb646;
    margin-right:0;
`

const StyledFormControl = styled(FormControl)`
    width:360px;
`

const StyledFormLabel = styled(FormLabel)`
    width: 328px;
    margin-left:16px;
    border-bottom:1px solid #000000;
`

const StyledRadioGroup = styled(RadioGroup)`
    width: 328px;
    display:flex;
    flex-direction:column;
`

const StyledFormControlLabel = styled(FormControlLabel)`
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    margin-left:4px;
    margin-right:16px;
    margin-top:11px;
    margin-botom:3px;
`

const StyledText = styled.div`
    width: 328px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    margin-bottom:8px;
    margin-top:25px;
`

const StyledBoxFrete = styled.div`
    width: 328px;
    height: 18px;
    display:flex;
    justify-content:flex-end;
    margin-bottom:15px;
`

const StyledFrete = styled.div`
    width: 104px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #000000;
`

const StyledBoxitems = styled.div`
    width: 360px;
    min-height: 42px;
    margin-bottom:33px;
    margin-top:8px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const StyledItem = styled.div`
    width: 296px;
    height: 18px;
    opacity: 0.89;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
`

export const handleChange = () => {

}

export const selectedValue = () => {

}

export function CartPage(props) {

    const [formOfPayment, setformOfPayment] = useState("");

    const onSubmitFormAddress = (event) => {
        event.preventDefault()
        props.submitForm(formOfPayment)
        setformOfPayment("")
    }

    return (
        <StyledContainer>
            <Title>
                <Text>
                    Meu carrinho
                </Text>
            </Title>
            <StyledBoxTextField>
                <StyledTextField
                    id="address"
                    label="Endereço de entrega"
                    defaultValue="rua alessandra vieira,42"
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="filled"
                />
            </StyledBoxTextField>

            <StyledBoxitems>
                <StyledItem>Carrinho Vazio</StyledItem>
            </StyledBoxitems>

            <StyledBoxFrete>
                <StyledFrete>Frete R$00.00</StyledFrete>
            </StyledBoxFrete>

            <StyledTotal>
                <StyledSubtotal>Subtotal</StyledSubtotal>
                <StyledSoma>R$00.00</StyledSoma>
            </StyledTotal>

            <StyledFormControl onSubmit={onSubmitFormAddress}>
                <StyledFormLabel>
                    <StyledText>
                        Forma de pagamento
                    </StyledText>
                </StyledFormLabel>

                <StyledRadioGroup>
                    <StyledFormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" />
                    <StyledFormControlLabel value="cartao" control={<Radio />} label="Cartão" />
                </StyledRadioGroup>

                <StyledBoxButton>
                    <StyledButtonSubmit type="submit" variant="contained">
                        <StyledContentButton>
                            Confirmar
                        </StyledContentButton>
                    </StyledButtonSubmit>
                </StyledBoxButton>

            </StyledFormControl>
            <Menu />
        </StyledContainer>
    )
}

function mapDispatchToProps(dispatch) {
    return ({

    })
}

export default connect(null, mapDispatchToProps)(CartPage);