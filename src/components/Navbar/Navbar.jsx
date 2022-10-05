import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <>
    <NavbarConteiner>
        <h2>Ecommerce <span>JR</span></h2>
        <div>
            <a href=''>Home</a>
            <a href=''>Categorias</a>
            <a href=''>Favoritos</a>
        </div>
    </NavbarConteiner>
    </>
  )
}

export default Navbar

const NavbarConteiner = styled.nav`
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
`