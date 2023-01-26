import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarStyle';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='wedding' onClick={toggle}>
                    Weddings
                </SidebarLink>
                <SidebarLink to='portrait' onClick={toggle}>
                    Portraits
                </SidebarLink>
                <SidebarLink to='newborn' onClick={toggle}>
                    Newborns
                </SidebarLink>
                <SidebarLink to='boudiour' onClick={toggle}>
                    Boudiour
                </SidebarLink>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='contact' onClick={toggle}>
                    Contact
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar