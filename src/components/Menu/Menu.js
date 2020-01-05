 import React from 'react';
 import { connect } from 'react-redux';
 import { push } from "connected-react-router";
 import { routes } from '../../containers/Router'
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
       color: "#5cb646"
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
 
 login() {
   this.props.goTocartPage.login();
 }
 
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
 
   render(props) {
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
          onClick={this.props.goTofeedPage}
          />
         <BottomNavigationAction  icon={<ShoppingCartIcon />}
          classes={actionClasses}
          onClick={this.props.goTocartPage}
          
          />
         <BottomNavigationAction icon={<PersonIcon />} 
         classes={actionClasses} 
         onClick={this.props.goToProfilePage}
         />
       </BottomNavigation>
    
     );
   }
 }
 const mapDispatchToProps = dispatch => ({
   goTofeedPage: () => dispatch(push(routes.feedPage)),
   goTocartPage: () => dispatch(push(routes.cartPage)),
   goToProfilePage: () => dispatch(push(routes.profilePage)),
 
 });
 
 
 Menu.propTypes = {
   classes: PropTypes.object.isRequired,
 };
 
 export default connect(null,mapDispatchToProps) (withStyles(styles)(Menu));