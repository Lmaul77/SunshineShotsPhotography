import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarStyle';


const Sidebar = ({ isOpen, toggle }) => {
    console.log("Sidebar props: ", {isOpen, toggle})
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/weddinggallery' onClick={toggle}>
                    Weddings
                </SidebarLink>
                <SidebarLink to='/portraitgallery' onClick={toggle}>
                    Portraits
                </SidebarLink>
                <SidebarLink to='/newborngallery' onClick={toggle}>
                    Newborns
                </SidebarLink>
                <SidebarLink to='/' onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to='/about' onClick={toggle}>
                    About
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/contact' onClick={toggle}>
                    Contact
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar