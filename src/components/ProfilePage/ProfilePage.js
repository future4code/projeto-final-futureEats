import React from "react";
import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const user = { //mock pra teste
    name: "Astrodev",
    email: "astrodev@future4.com",
    cpf: "111.111.111-11",    
    address: "R. Afonso Braz, 177 - Vila N. Conceição"
}

const order = null;

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

function ProfilePage(){

    return (
        <Wrapper>
            <StyledAppBar position="static" color="default">
                <Toolbar>
                    <StyledTitle variant="h6">
                        Meu perfil
                    </StyledTitle>
                </Toolbar>
            </StyledAppBar>
            <StyledUserName>{user.name}</StyledUserName>
            <StyledUserEmail>{user.email}</StyledUserEmail>
            <StyledUserCPF>{user.cpf}</StyledUserCPF>
            <StyledRectangle>
                <StyledAddressTitle>Endereço cadastrado</StyledAddressTitle>
                <StyledAddress>{user.address}</StyledAddress>
            </StyledRectangle>
            <StyledHistoryTitle>Histórico de Pedidos</StyledHistoryTitle>
            <StyledDivider/>
            <StyledHistory>{order === null? "Você não realizou nenhum pedido" : order}.</StyledHistory>
        </Wrapper>
    )
}

export default ProfilePage;