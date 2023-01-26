import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarStyle'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                SSS Photography
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='wedding'>Weddings</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='portrait'>Portraits</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='newborn'>Newborns</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='boudiour'>Boudiour</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='about'>About</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='contact'>
                    Contact
                </NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar