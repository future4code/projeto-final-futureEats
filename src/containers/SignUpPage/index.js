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
import {authSignUp} from "../../actions/authSignUp";

 const FormContainer= styled.form`
    width: 100%;
    place-content: center;
    justify-items: center;
    display: grid;  
`;
const TextFieldStyled= styled(TextField)`
  display: grid; 
  width: 100%;
`;
const Pstyled = styled.div`
  margin-top: 28px;
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
`;
const Logo= styled.div`
  justify-items: center;
  display: grid;  
  margin-top: 24px;
  margin-bottom:0;
`;
const ButtonCreate= styled.button`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color: #5cb646;
    margin-top: 16px;
`;

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
          isCPFValid: false,
        };
        this.handleCPFChange = this.handleCPFChange.bind(this)
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

      validateCPF = (cpf) => {
          let Sum;
          let Remainder;
          Sum = 0;
          if (cpf == "00000000000") return false;

          for (let i = 1; i <= 9; i++) Sum = Sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
          Remainder = (Sum * 10) % 11;

          if ((Remainder == 10) || (Remainder == 11)) Remainder = 0;
          if (Remainder != parseInt(cpf.substring(9, 10))) return false;

          Sum = 0;
          for (let i = 1; i <= 10; i++) Sum = Sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
          Remainder = (Sum * 10) % 11;

          if ((Remainder == 10) || (Remainder == 11)) Remainder = 0;
          if (Remainder != parseInt(cpf.substring(10, 11))) return false;
          return true;
      };

      handleCPFChange(e) {
        const validCPF = this.validateCPF(e.target.value);
        this.setState({cpf:(e.target.value), isCPFValid: validCPF });
        console.log(validCPF)
     }

      handleChangePassword = (event) => {
        this.setState({
          password: event.target.value
        });
      };

      handleSubmit = event => {
        event.preventDefault();
        this.props.authSignUp(
          this.state.name,
          this.state.email,
          this.state.cpf,
          this.state.password,
        )
      };

    render(props) {
        const { classes } = this.props;
        const { length } = this.state.name;
        const { email, cpf, isCPFValid, password, passwordConfirm } = this.state;

        return (
            <div>
                <Logo >
                  <img
                      src={logo}
                  />
                  <Pstyled> Cadastrar </Pstyled>
                </Logo>
                <FormContainer autoComplete="off" onSubmit={this.handleSubmit}>
                        
                        <TextFieldStyled
                            required
                            label="Nome"
                            placeholder="Nome e Sobrenome"
                            margin="normal"
                            variant="outlined"
                            name="name" 
                            onChange={this.handleChangeName}
                            value={this.state.name}
                            inputProps={{ minlength:"5" }}
                            error={length < 5 && length !== 0}
                            helperText={(length < 5 && length !== 0) ? "Mínimo de 5 caracteres." : ""}
                        />
                        <TextFieldStyled
                            required
                            label="Email"
                            placeholder="email@email.com"
                            margin="normal"
                            variant="outlined"
                            name="email"
                            onChange={this.handleChangeEmail}
                            value={email}
                            error={!(email.match(/\S+@\S+\.\S+/)) && email !== ""}
                            helperText={(!(email.match(/\S+@\S+\.\S+/)) && email !== "") ? "Insira um email válido." : ""}
                        />
                        <TextFieldStyled
                            required
                            label="CPF"
                            placeholder="000.000.000-00"
                            margin="normal"
                            variant="outlined"
                            name="cpf"
                            onChange={this.handleCPFChange}
                            value={cpf}
                            error={!isCPFValid && cpf !== ""}
                            helperText={(!isCPFValid && cpf !== "") ? "Insira um cpf válido." : ""}

                        />    
                        
                        <TextFieldStyled
                            value={password}
                            required
                            name="password"
                            margin="normal"
                            variant="outlined"
                            type={this.state.showPassword ? 'text' : 'password'}
                            label="Senha"
                            placeholder="Mínimo 6 caracteres"
                            onChange={this.handleChangePassword}
                            error={password.length < 6 && password.length !== 0}
                            helperText={(password.length < 6 && password.length !== 0) ? "Mínimo de 6 caracteres." : ""}
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
                            value={passwordConfirm}
                            error={ password !== passwordConfirm && passwordConfirm !== ""}
                            helperText={ (password !== passwordConfirm && passwordConfirm !== "") ? "As senhas devem coincidir" : ""}
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
  authSignUp: (name,email,cpf,password) => dispatch(authSignUp(name,email,cpf,password)),
});

export default connect(
  null,
  mapDispatchToProps
  ) (SignUpPage)
  
//TROCAR O CREATEUSERACTION PELO AUTHSIGNUP

