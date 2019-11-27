import React, {useState} from "react";
import styled from 'styled-components'
import Roboto from "typeface-roboto"
import SearchBar from "../../components/SearchBar/SearchBar"
import Menu from "../../components/Menu"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from "react-redux";
import RestaurantCard from "../../components/restaurantsCard/restaurantCard"

const MainContainer = styled.div`
    height:100vh;
    position: relative;
    display: flex;
`

const Container = styled.div`
    flex-grow: 1;
`
const ContainerList = styled.div`
    width: (100% -32px);
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-items:center;
    margin-bottom: 70px;
    margin-right: 16px;
    margin-left:16px;
    position: relative;
`

const Header = styled.div`
    height: 64px;
    width:100vw;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
`
const Title = styled.div`
    width: 74px;
    width:100vw;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
    margin-bottom: 0;
`
const MenuBar = styled(Menu)`
    position: absolute;
    background-color: green;
    width: 100vw;
`
const AppBarStyled = styled(AppBar)`
    width: 100vw;
    padding-left:16px;
`


function FeedPage(props) {
    
    const [categoryState, setCategoryState] = useState(1)
    const [restaurants, setRestaurants] = useState(props.listRestaurants)

    const handleChange = (event, value) => {
        const category = ["Carnes", "Italiana", "Hamburguer", "Asiática", "Árabe", "Mexicana", "Petiscos", "Sorvetes", "Baiana"]
        if (categoryState === value){
            setRestaurants(props.listRestaurants)
            setCategoryState('')
        } 
        else{
            const listCategory = props.listRestaurants.filter((el) => (el.category === category[(value)]))
            setRestaurants(listCategory)
            setCategoryState(value)
        }

    }

    return (
        <MainContainer>
            <Container>
                <Header>
                    <Title>FutureEats</Title>
                </Header>
                <SearchBar/>
                <AppBarStyled position="static" color="default">
                    <Tabs
                        value="1"
                        onChange={handleChange}
                        indicatorColor="secundary"
                        textColor="#000000"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="Carnes" />
                        <Tab label="Italiana" />
                        <Tab label="Hamburguer" />
                        <Tab label="Asiática" />
                        <Tab label="Árabe" />
                        <Tab label="Mexicana" />
                        <Tab label="Petiscos" />
                        <Tab label="Sorvetes" />
                        <Tab label="Baiana" />
                    </Tabs>
                </AppBarStyled>
                <ContainerList>
                    {restaurants.map((restaurant) => (<RestaurantCard img={restaurant.logoUrl} 
                                                                            name={restaurant.name} 
                                                                            time={restaurant.deliveryTime} 
                                                                            fret={restaurant.shipping}
                                                    />)
                                    )
                    }
                </ContainerList>
            </Container>
            
            <MenuBar/>
        </MainContainer>
    )
}

const mapStateToProps = state =>({
    listRestaurants: state.login.restaurants
})

export default connect(mapStateToProps)(FeedPage);