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
 

 const FormContainer= styled.form`
    width: 100%;
    height: 100vh;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;  
`
 /*
 display:flex
  flex-flow: column wrap;
  */

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
      }
      
      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };

      handleClickShowPasswordConfirm = () => {
        this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
      };
    
      handleChange = prop => event => {
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
      
      handleChangeCpf = (event) => {
        this.setState({
          cpf: event.target.value
        });
      };

      handleChangePassword = (event) => {
        this.setState({
          password: event.target.value
        });
      };

      handleSubmit = event => {
        event.preventDefault();
        if (this.state.password !== this.state.passwordConfirm)
      alert("Senhas não combinam, preencha de novo")
      else {
      this.props.createUser(
          this.state.name, 
          this.state.email,
          this.state.cpf,
          this.state.password,
          )
          alert("Enviado!");
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
                            inputProps={{  pattern: "[a-zA-Z]", minlength:"5"  }}
                            //pattern="^[a-zA-Z]{5,}" 
                            onChange={this.handleChangeName }
                            value={this.state.name}
                        />
                        <TextFieldStyled
                            required
                            label="Email"
                            placeholder="email@email.com"
                            margin="normal"
                            variant="outlined"
                            name="email"
                            //pattern="^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
                            inputProps={{  pattern: "[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"  }}
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
                            //pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
                            inputProps={{  pattern: "/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"  }}
                            onChange={this.handleChangeCpf }
                            value={this.state.cpf}
                        />    
                        
                        <TextFieldStyled
                            value={this.state.password}
                            required
                            name="password"
                            //pattern="^[a-zA-Z0-9_.-]{6,}"
                            margin="normal"
                            id="outlined-adornment-password"
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
                                //pattern: "[a-zA-Z0-9_.-]", minlength:"6"
                            }}
                        />

                        <TextFieldStyled
                            required
                            name="passwordConfirm"
                            //pattern="^[a-zA-Z0-9_.-]{6,}"
                            margin="normal"
                            id="outlined-adornment-passwordConfirm"
                            variant="outlined"
                            type={this.state.showPasswordConfirm ? 'text' : 'password'}
                            label="Senha"
                            placeholder="Mínimo 6 caracteres"
                            value={this.state.passwordConfirm}
                            onChange={this.handleChange('passwordConfirm')}
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
                                //pattern: "[a-zA-Z0-9_.-]", minlength:"6"
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

