import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import styled from "styled-components";

const styles = {
    root: {
      color: "grey",
      "&$selected": {
      color: "#81c784"
      }
    },
    selected: {},
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
  };


class Menu extends React.Component {
  state = {
    value: " ",
  };

onClickHome = (event) => {
    this.setState({
        value: 0
    });
};
onClickCar = (event) => {
    this.setState({
        value: 1
    });
};
onClickProfile = (event) => {
    this.setState({
        value: 2
    });
};

  render() {
    const actionClasses = this.props.classes

    return (

      <BottomNavigation style={{position: "fixed", bottom:"0", width:"100%"}}
        onChange={this.handleChange}
        showLabels
        value={this.state.value}
        //zDepth={1}
      >
        <BottomNavigationAction  icon={<HomeIcon />}
         classes={actionClasses}
         onClick={this.onClickHome}
         />
        <BottomNavigationAction  icon={<ShoppingCartIcon />}
         classes={actionClasses}
         onClick={this.onClickCar}
         
         />
        <BottomNavigationAction icon={<PersonIcon />} 
        classes={actionClasses} 
        onClick={this.onClickProfile}
        />
      </BottomNavigation>
   
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);