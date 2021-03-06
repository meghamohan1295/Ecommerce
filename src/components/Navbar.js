import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button.js'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-extend-sm navbar-dark px-sm-5 ">
            <Link to='/'>
            <img src={logo} alt='hai' className='navbar-brand'/>
            </Link>
            <ul className="navbar-nav align-items-center">
            <li className="align-item ml-5">
            <Link to='/details' className="nav-link">
            products
            </Link>
            </li>
            </ul>
            <Link to='/carts'className="ml-auto">
            <ButtonContainer> 
                <span className='mr-2'>
           <i className="fa fa-cart-plus" ></i>
                </span>my cart
            </ButtonContainer>
            </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link {
    color:var(--mainWhite)!important;
    text-transform:capitalize;
}`

