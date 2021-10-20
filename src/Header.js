import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
    Link
} from "react-router-dom";
import logo from './Images/logo.png';

function Header({ cartItems, user, signOut }) {

    const getCount = () => {
        let count = 0;
        // Loop through all cart items
        cartItems.forEach((item) => {
            // add the quantity of the cart item to tota;
            count += item.product.quantity;
        })

        return count;
    }

    


    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img src={logo} />
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineTwo>Select Your Address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type='text' />

                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>

                <HeaderOption onClick={signOut}>
                    <OptionLineOne>Welcome, {user.name}</OptionLineOne>
                    <OptionLineTwo>Your Account</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Lets see whats</OptionLineOne>
                    <OptionLineTwo>More⮛</OptionLineTwo>
                </HeaderOption>


                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon />
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>

            </HeaderNavItems>

        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    svg{
        color: #03629b;
    }
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
        @media screen and (max-width: 350px){
            width: 80px;
        }
    }
`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
    
`

const OptionLineOne = styled.div`
    @media screen and (max-width: 900px){
            font-size: 13px;
        }
        @media screen and (max-width: 350px){
            font-size: 10px;
        }
`

const OptionLineTwo = styled.div`
    font-weight: 700;
    @media screen and (max-width: 900px){
            font-size: 13px;
        }
        @media screen and (max-width: 900px){
            font-size: 10px;
        }
`

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
    @media screen and (max-width: 350px){
        height: 20px;
        }
`


const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    background-color: #499cc842;
    :focus {
        outline: none;
    }
`

const HeaderSearchIconContainer = styled.div`
    background-color: #03629b;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        color: white;
    }
    
`

const HeaderNavItems = styled.div`
    display: flex;
    
`

const HeaderOption = styled.div`
    // TRouBLe
    padding: 10px 9px 10px 19px;
    cursor: pointer;
`

const HeaderOptionCart = styled.div`
    display: flex;
    a {
        display: flex;
        align-items: center;
        padding-right: 29px;
        color: white;
        text-decoration: none;
    }
`

const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: black;

`