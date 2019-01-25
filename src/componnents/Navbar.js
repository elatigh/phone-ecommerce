import React, { Component } from 'react'
import logo from '../logo.svg'
import {Link  } from 'react-router-dom'
import {ButtonContainer} from './Button'
import styled from 'styled-components'
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
         <Link to="/">
           <img src={logo} alt="store log" className="navbar-brand"/>
         </Link>
         <ul className="navbar-nav align-items-center"> 
           <li className="nav-item ml-5">
             <Link className="nav-link"  to="/">Elatigh Products </Link>
           </li>
         </ul>
         <Link className="ml-auto" to="/cart"> <ButtonContainer >
             <span className="mr-2"><i className="fa fa-cart-plus"/></span> My cart
           </ButtonContainer > </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
 background:var(--mainBlue);
 .nav-link{
   color:var(--mainWhite);
   font-size:1.3rem;
   text-transform:capitalize;
 }
`
