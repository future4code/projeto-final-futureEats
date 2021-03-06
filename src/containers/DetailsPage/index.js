import React, {Component, Fragment} from "react";
import {push} from "connected-react-router";
import { routes }from "../Router"
import {connect} from "react-redux"
import styled from "styled-components";
import {FoodsCard} from "../../components/FoodsCard/FoodsCard"
import "typeface-roboto";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import {addToCart, getRestaurantDetails, removeProducts, setSelectedProduct} from "../../actions/restaurant";
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {QuantityPicker} from "../../components/QuantityPicker";
import Button from "@material-ui/core/Button";
import { Modal } from 'rsuite';
import Menu from "../../components/Menu"



const DetailsPageContainer = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 17px;
`;
const SectionTitleWrapper = styled.div`
  width: 328px;
  height: 18px;
  margin: 16px;
`;
const TypographyStyled = styled(Typography)`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  padding-bottom: 8px;
`;

const PopupText = styled.p`
text-align: center;
  margin-top: 12px;
  margin-bottom: 31px;
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

const ButtonStyled = styled(Button)`
  margin-left: 80px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: #5cb646;
`;

const QuantityPickerStyled = styled(QuantityPicker)`
  width: 296px;
  height: 56px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;

`;

const ModalStyled = styled(Modal)`
  && {
 margin: 160px 20px 20px;
 }
`;

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      selectedQuantity: "",
      productId:"",
      backdrop: true,
    }
  }

  componentDidMount() {
    const {getRestaurantDetails} = this.props;
    const {restaurantId} = this.props;
    getRestaurantDetails(restaurantId);
  }

  sortProductsByCategory(a, b) {
    if (a.category < b.category) {
      return -1
    }
    if (a.category > b.category) {
      return 1
    }
    return 0;
  }

  handleQuantityModal = (productId) => {
    this.setState({
      isModalOpen: true,
      productId
      }
    )
  };
  handleAddToCart = () => {
    this.setState({
      isModalOpen: false,
    });
    this.props.addToCart(this.props.selectedProducts);
  };

  onChangeQuantitySelection = (quantity) => {
    this.props.setSelectedProduct(this.state.productId, quantity);
  };

  handleRemoveItems = (quantity) => {
    this.props.removeProducts(quantity, this.state.productId);
  };

  render() {
    const {restaurantDetails} = this.props;
    if (!restaurantDetails.products) {
      return (<h1>Carregando</h1>)
    }
    const orderedProducts = restaurantDetails.products.sort(this.sortProductsByCategory);

    let lastCategory;
    const allProducts = orderedProducts.map(product => {
        let shouldShowCategory = false;
        if (lastCategory !== product.category) {
          lastCategory = product.category
          shouldShowCategory = true
        }
      if (product.quantity !== undefined){
        console.log(product.quantity) 
      }
        return (
          <Fragment>
            {shouldShowCategory ? (
              <TypographyStyled>
                {product.category}
                <Divider/>
              </TypographyStyled>
            ) : null}
            <FoodsCard
              product={product}
              handleModal={this.handleQuantityModal}
              selectedQuantity={product.quantity !== undefined ? product.quantity : 0}
              productId={this.props.productId}
              handleRemoveItems={this.handleRemoveItems}
            />
          </Fragment>
        )
    });

    return (
      <DetailsPageContainer>
        <DetailsCard restaurantDetails={restaurantDetails}/>
        <SectionTitleWrapper>
          {allProducts}
        </SectionTitleWrapper>
        <div>
          <ModalStyled
            show={this.state.isModalOpen}
            style={{height: 216, width: 328}}>
            <PopupText>
              Selecione a Quantidade Desejada
            </PopupText>
            <QuantityPickerStyled
              onChange={this.onChangeQuantitySelection}
              placement="top"
            />
            <ButtonStyled onClick={this.handleAddToCart}>ADICIONAR AO CARRINHO</ButtonStyled>
          </ModalStyled>
        </div>
        <Menu />
      </DetailsPageContainer>
    )
  }
}

const mapStateToProps = state => ({
  restaurantId: state.restaurant.restaurantId,
  restaurantDetails: state.restaurant.restaurantDetails,
  selectedProducts: state.restaurant.selectedProducts,
  quantity: state.restaurant.quantity,
  cartProducts: state.restaurant.cartProducts,
});

const mapDispatchToProps = dispatch => ({
  getRestaurantDetails: (restaurantId) => dispatch(getRestaurantDetails(restaurantId)),
  goToLogin: () => dispatch(push(routes.loginPage)),
  setSelectedProduct: (productId, quantity) => dispatch(setSelectedProduct(productId, quantity)),
  removeProducts: (quantity) => dispatch(removeProducts(quantity)),
  addToCart: (selectedProducts) => dispatch(addToCart(selectedProducts)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);


