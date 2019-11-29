import React, { useEffect } from "react";
import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import {getUser} from "../../actions/profile"
import {getHistory} from "../../actions/profile"
import HistoryCard from "../HistoryCard";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;    
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    font-size: 16px;
    background-color: white;
`

const StyledAppBar = styled(AppBar)`    
    box-shadow: none;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 0 0.5px 0 0 
        rgba(0, 0, 0, 0.25);
`

const StyledTitle = styled(Typography)`
    font-size: 16px;
    width: 175px;
    height: 44px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;     
    align-items: center;
`

const StyledUserName = styled.div`
    margin: 16px 16px 0;    
    padding-left: 5px;
`

const StyledUserEmail = styled.div`
    margin: 8px 16px 0;    
    padding-left: 5px;
`

const StyledUserCPF = styled.div`
    margin: 8px 16px 0;
    padding-left: 5px;
`

const StyledRectangle = styled.div`
    background-color: #eee;
    margin: 16px 0 0;
    height: 76px;
`

const StyledAddressTitle = styled.div`
    margin: 16px 16px 0;
    color: #b8b8b8;
`

const StyledAddress = styled.div`
    margin: 8px 16px 0;
`

const StyledHistoryTitle = styled.div`    
    margin: 16px 16px 0;
`

const StyledDivider = styled.div`
    margin: 8px 16px 0;
    border: .5px solid black;
`

const StyledHistory = styled.div`
    margin: 16px 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function ProfilePage(props){
    
    useEffect(async ()=>{
        await props.getUser()
        await props.getHistory()
    }, [])



    return (
        <Wrapper>
            <StyledAppBar position="static" color="default">
                <Toolbar>
                    <StyledTitle variant="h6">
                        Meu perfil
                    </StyledTitle>
                </Toolbar>
            </StyledAppBar>
            <StyledUserName>{props.user.name}</StyledUserName>
            <StyledUserEmail>{props.user.email}</StyledUserEmail>
            <StyledUserCPF>{props.user.cpf}</StyledUserCPF>
            <StyledRectangle>
                <StyledAddressTitle>Endereço cadastrado</StyledAddressTitle>
                <StyledAddress>{props.user.address}</StyledAddress>
            </StyledRectangle>
            <StyledHistoryTitle>Histórico de Pedidos</StyledHistoryTitle>
            <StyledDivider/>
            <StyledHistory>{props.history === null? 
                            "Você não realizou nenhum pedido" :
                            props.history.map( (history) => 
                            (<HistoryCard  history={history} />) )}.
            </StyledHistory>
        </Wrapper>
    )
}

const mapStateToProps = state => {
    console.log(state.setTools.user)
    return ({
        history: state.profile.history,
        user: state.setTools.user
    })
}

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUser()),
    getHistory: () => dispatch(getHistory()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);