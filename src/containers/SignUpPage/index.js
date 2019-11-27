import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components";
import logo from "./logo.png";
import Button from '@material-ui/core/Button';
import { createUserAction } from "../../actions/allActions"
import {cpfMask, emailMask } from "./mask"
 
 const FormContainer= styled.form`
    width: 100%;
    height: 100vh;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;  
`
const TextFieldStyled= styled(TextField)`
  display: grid; 
  width: 100%;
`
const Pstyled = styled.div`
    margin-left:5vh;
    padding:10px;
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
const Logo= styled.div`
  justify-items: center;
  display: grid;  
  padding-top:2vh;
  margin-bottom:0;
`
const ButtonCreate= styled.button`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color: #5cb646;
`

  class SignUpPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          name: "",
          email: "",
          cpf: "",
          password: "",
          passwordConfirm: "",
          showPassword :false,
          showPasswordConfirm: false,
        }
        this.handlechange = this.handlechange.bind(this)
      }
      
      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };

      handleClickShowPasswordConfirm = () => {
        this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
      };
    
      handleChange0 = prop => event => {
        this.setState({ [prop]: event.target.value });
      };
 
      handleChangeName = (event) => {
        this.setState({
          name: event.target.value
        });
      };
    
      handleChangeEmail = (event) => {
        this.setState({
          email: event.target.value
        });
      };

      handlechange(e) {
        this.setState({cpf: cpfMask(e.target.value) })
      }

      handleChangePassword = (event) => {
        this.setState({
          password: event.target.value
        });
      };

      handleSubmit = event => {
        event.preventDefault();
        if (this.state.name.length < 5) 
          alert ("Nome deve ter no mínimo 5 caracteres!")
        if (this.state.email.indexOf("@") === -1 && this.state.email.indexOf(".") === -1 ) {
          alert("email inválido")
          }
        if (this.state.password.length < 6) 
          alert ("Senha deve ter no mínimo 6 caracteres!")
        if (this.state.password !== this.state.passwordConfirm)
          alert("Senhas não combinam, confirme de novo")
        else {
          this.props.createUser(
              this.state.name, 
              this.state.email,
              this.state.cpf,
              this.state.password,
              )
            }
          }; 

       
    render(props) {
        const { classes } = this.props;
        return (
            <div>
                <Logo >
                  <img
                      src={logo}
                  />
                  <Pstyled> Cadastrar </Pstyled>
                </Logo>
                <FormContainer noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        
                        <TextFieldStyled
                            required
                            label="Nome"
                            placeholder="Nome e Sobrenome"
                            margin="normal"
                            variant="outlined"
                            name="name" 
                            onChange={this.handleChangeName}
                            value={this.state.name}
                        />
                        <TextFieldStyled
                            required
                            label="Email"
                            placeholder="email@email.com"
                            margin="normal"
                            variant="outlined"
                            name="email"
                            onChange={this.handleChangeEmail}
                            value={this.state.email}
                        />               
                        <TextFieldStyled
                            required
                            label="CPF"
                            placeholder="000.000.000-00"
                            margin="normal"
                            variant="outlined"
                            name="cpf"
                           // onChange={this.handleChangeCpf }
                            onChange={this.handlechange}
                            value={this.state.cpf}
                        />    
                        
                        <TextFieldStyled
                            value={this.state.password}
                            required
                            name="password"
                            margin="normal"
                            variant="outlined"
                            type={this.state.showPassword ? 'text' : 'password'}
                            label="Senha"
                            placeholder="Mínimo 6 caracteres"
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                        />

                        <TextFieldStyled
                            required
                            name="passwordConfirm"
                            margin="normal"
                            variant="outlined"
                            type={this.state.showPasswordConfirm ? 'text' : 'password'}
                            label="Senha"
                            placeholder="Mínimo 6 caracteres"
                            value={this.state.passwordConfirm}
                            onChange={this.handleChange0('passwordConfirm')}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPasswordConfirm}
                                    >
                                    {this.state.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                        />

                     <ButtonCreate variant="contained"  type="submit" >
                        Criar
                    </ButtonCreate>      
                    </FormContainer>
            </div>
    );
  }
}

SignUpPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createUser: (name,email,cpf,password) => dispatch(createUserAction(name,email,cpf,password)),
});

export default connect(
  null,
  mapDispatchToProps
  ) (SignUpPage)
  
//TROCAR O CREATEUSERACTION PELO AUTHSIGNUP

