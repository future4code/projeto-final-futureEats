import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
    height: 56px;
    margin: 72px 16px 0;
    border: 1px lightgrey solid;
    border-radius: 2px;
    box-shadow: none;
    display: flex;    
    align-items: center;
`

function SearchBar() {
    return (
        <StyledPaper component="form">
            <IconButton type="submit">
                <SearchIcon />
            </IconButton>
            <InputBase placeholder="Restaurante"/>            
        </StyledPaper>
    )
}

export default SearchBar;