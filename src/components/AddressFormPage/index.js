import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../../containers/Router';
import { createAddress } from '../../actions/addressForm';

export const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 100vw;
    justify-content:center;
    align-Items: center;
`

export const Title = styled.div`
    width: 360px;
    height: 42px;
`

export const Text = styled.p`
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

export const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
`

export const StyledButtonSubmit = styled(Button)`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color: #5cb646;
    padding:0;
    margin: 8px 16px 36px 16px;
`

export const StyledContentButton = styled(Typography)`
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

export const StyledBoxTextField = styled.div`
    width: 360px;
    height: 72px;
`

export const StyledBoxButton = styled.div`
    width: 360px;
    height: 72px;
`

export const StyledTextField = styled(TextField)`
    width: 328px;
    height: 56px;
    margin:8px 16px 8px 16px;
`

const AddressFormPage = (props) => {

    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    const onSubmitFormAddress = (event) => {
        event.preventDefault()
        props.submitForm(logradouro, numero, bairro, cidade, estado, complemento)
        setLogradouro("")
        setNumero("")
        setComplemento("")
        setBairro("")
        setCidade("")
        setEstado("")
    }

    return (
        <StyledContainer>
            <Title>
                <Text>
                    Meu endereço
                </Text>
            </Title>
            <StyledForm onSubmit={onSubmitFormAddress}>
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
                        value={logradouro}
                        onChange={(event)=> setLogradouro(event.target.value)}
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
                        value={numero}
                        onChange={(event)=> setNumero(event.target.value)}
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
                        value={complemento}
                        onChange={(event)=>setComplemento(event.target.value)}
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
                        value={bairro}
                        onChange={(event)=>setBairro(event.target.value)}
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
                        value={cidade}
                        onChange={(event)=>setCidade(event.target.value)}
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
                        value={estado}
                        onChange={(event)=>setEstado(event.target.value)}
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

function mapDispatchToProps(dispatch) {
    return ({
        submitForm: (logradouro, numero, bairro, cidade, estado, complento) => dispatch(createAddress(logradouro, numero, bairro, cidade, estado, complento))
    })
}

export default connect(null, mapDispatchToProps)(AddressFormPage);