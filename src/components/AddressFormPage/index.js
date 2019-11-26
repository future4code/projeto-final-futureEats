import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../../containers/Router';

const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 360px;
    align-items:center;
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

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
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

const StyledBoxTextField = styled.div`
    width: 360px;
    height: 72px;
`

const StyledBoxButton = styled.div`
    width: 360px;
    height: 72px;
`

const StyledTextField = styled(TextField)`
    width: 328px;
    height: 56px;
    margin:8px 16px 8px 16px;
`

const AddressFormPage = () => {
    return (
        <StyledContainer>
            <Title>
                <Text>
                    Meu endereço
                </Text>
            </Title>
            <StyledForm >
                <StyledBoxTextField>
                    <StyledTextField
                        type="text"
                        required
                        id="logradouro"
                        label="Logradouro"
                        placeholder="Rua/ Av."
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </StyledBoxTextField>
                <StyledBoxTextField>
                    <StyledTextField
                        type="number"
                        required
                        id="numero"
                        label="Número"
                        placeholder="Número"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </StyledBoxTextField>
                <StyledBoxTextField>
                    <StyledTextField
                        type="text"
                        id="complemento"
                        label="Complemento"
                        placeholder="Apto./ Bloco"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </StyledBoxTextField>
                <StyledBoxTextField>
                    <StyledTextField
                        type="text"
                        required
                        id="bairro"
                        label="Bairro"
                        placeholder="Bairro"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </StyledBoxTextField>
                <StyledBoxTextField>
                    <StyledTextField
                        type="text"
                        required
                        id="cidade"
                        label="Cidade"
                        placeholder="Cidade"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </StyledBoxTextField>
                <StyledBoxTextField>
                    <StyledTextField
                        type="text"
                        required
                        id="estado"
                        label="Estado"
                        placeholder="Estado"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </StyledBoxTextField>
                <StyledBoxButton>
                    <StyledButtonSubmit type="submit" variant="contained">
                        <StyledContentButton>
                            Salvar
                        </StyledContentButton>
                    </StyledButtonSubmit>
                </StyledBoxButton>

            </StyledForm>
        </StyledContainer>
    );
}

export default connect()(AddressFormPage);