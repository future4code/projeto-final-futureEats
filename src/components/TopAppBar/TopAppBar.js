import React from "react";
import { goBack } from "connected-react-router";
import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { connect } from "react-redux";


const StyledAppBar = styled(AppBar)`
    box-shadow: none;    
    background-color: white;
    width: 100vw;    
`

const StyledToolbar = styled(Toolbar)`    
    display: flex;
    justify-content: space-between;    
    box-shadow: 0 0.5px 0 0 
        rgba(0, 0, 0, 0.25);
    width: 100vw;
    margin: 0;
    padding: 0;
    height: 64px;
`

const StyledPageTitle = styled.p`
    width: 100%;
    position: absolute;
    text-align: center;    
    padding: 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: -0.39px;
    color: black;
`

const StyledArrowIcon = styled(ArrowBackIosIcon)`
    position: absolute;
    margin-left: 16px;
`

function TopAppBar(props){

    return (
        <StyledAppBar position="static" color="default">
                <StyledToolbar>
                    {props.pageTitle === "FutureEats"? "" : <StyledArrowIcon onClick={props.goBack}/>}
                    <StyledPageTitle>{props.pageTitle}</StyledPageTitle>
                </StyledToolbar>
        </StyledAppBar>
    )
}

const mapDispatchToProps = (dispatch) => ({
    goBack: () => dispatch(goBack()),
})

export default connect(null, mapDispatchToProps)(TopAppBar);