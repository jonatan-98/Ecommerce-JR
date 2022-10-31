import React from 'react'
import styled from 'styled-components'
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <header style={style.header}>
        <Link to= "/">
            <h2 style={style.logo}>Ecommerce <span style={style.span}>JR</span></h2>
        </Link>
        <nav>
            <Link to="/">
                <a href='' style={style.a}>Joyeria</a>
            </Link>
            <Link to="/">
                <a href='' style={style.a}>Electronica</a>
            </Link>
            <Link to="/">
                <a href='' style={style.a}>Ropa</a>
            </Link>
            
        </nav>
            <CartWidget/>
    </header>
  )
}

export default Navbar

/* const NavbarConteiner = styled.nav`
    h2{
        color: white;
        font-weight : 400;
        span{
            font-weight : bold;
        }
    }
    display : flex ;
    padding : .4rem;
    background-color: #333;
    align-items: center;
    justify-content : space-between;
    a{
        color:white;
        text-decoration: none;
        margin-right:1rem;
    }
` */

const style = {
    header:{
        display : 'flex' ,
        padding : '0.4 rem',
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent : 'space-between',
    },
    logo:{
        color: 'white',
        fontWeight : 400,
    },
    span:{
        fontWeight : 'bold',
    },
    a:{
        color:'white',
        textDecoration: 'none',
        marginRight:'1rem',
    },

}