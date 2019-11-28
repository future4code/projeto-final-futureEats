import React, { useState } from "react"
import styled from 'styled-components'
import Logo from "../../img/logo-future-eats-invert_2019-11-26/logo-future-eats-invert.png"
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Button } from "@material-ui/core";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { login } from "../../actions/Login";
import { connect } from "react-redux"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`
const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-bottom: 28px;
`

const ImgStyled = styled.img`
    width: 104px;
    height: 58px;
    object-fit: contain;
    margin-top: 28px;
`
const Title = styled.p`
    margin-bottom: 20px;
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
`

const TextFieldEmail = styled(TextField)`
    margin-top: 0px;
    width: 328px;
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    margin-bottom: 0px;
`
const TextFieldPassword = styled(TextField)`
    margin-top: 16px;
    margin-bottom: 16px;
    width: 328px;
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
`
const ButtonLogin = styled(Button)`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color: #5cb646;
`

const SingUp = styled.p`
    margin-top: 0;
    margin-bottom: 28px;
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
    display: flex;
    justify-content: center;
    align-items:center;
`

const CallSingUp = styled.p`
    margin-left: 2px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
`

const ErrorMessage = styled.p`
    margin-top: 0;
    margin-bottom: 28px;
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
    color: red;
    display: flex;
    justify-content: center;
    align-items:center;
`


const LoginPage = (props) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (event) => {
        event.target.name === "email"?
            setEmail(event.target.value):
            setPassword(event.target.value)
    }

    const handleClickShowPassword = () =>{
        setShowPassword(!showPassword)
    }

    const setForm = (event) => {
        
        event.preventDefault()
        props.apiLogin( email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <MainContainer>
            <ImgStyled src={Logo} />
            <Title>Entrar</Title>
            <FormLogin onSubmit={setForm}>
                <TextFieldEmail
                    id="outlined-email"
                    label="E-mail*"
                    value={email}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextFieldPassword
                    id="password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    label="Senha*"
                    name="password"
                    placeholder="Mínimo 6 caracteres"
                    value={password}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <ButtonLogin type="submit" >Entrar</ButtonLogin>
            </FormLogin>
            <SingUp>Não possui cadastro?
               <CallSingUp onClick={props.gotoSingUp}> Clique aqui</CallSingUp>
            </SingUp>
            <ErrorMessage>{props.error}</ErrorMessage>
        </MainContainer>
    )
}

const mapStateToProps = state =>({
    error: state.login.error
})

const mapDispatchToProps = dispatch => {
    return {
        apiLogin: (email, password) => dispatch(login(email, password)),
        gotoSingUp: () => dispatch(push(routes.singUpPage)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)