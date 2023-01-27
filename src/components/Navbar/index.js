import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarStyle'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
                SSS Photography
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='wedding'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Weddings</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='portrait'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Portraits</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='newborn'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Newborns</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='boudiour'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Boudiour</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >About</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='contact'>
                    Contact
                </NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar