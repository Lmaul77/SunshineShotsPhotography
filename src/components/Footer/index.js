import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './footerStyle'

const Footer = () => {
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            About SSS Photography
                        </FooterLinkTitle>
                            <FooterLink to='test'>
                                Contact
                            </FooterLink>
                            <FooterLink to='test'>
                                FAQ
                            </FooterLink>
                            <FooterLink to='test'>
                                Testimonials
                            </FooterLink>
                            <FooterLink to='test'>
                                Learn more about Larissa
                            </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                            <FooterLink to='test'>
                                Facebook
                            </FooterLink>
                            <FooterLink to='test'>
                                Instagram
                            </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Galleries
                        </FooterLinkTitle>
                            <FooterLink to='test'>
                                Weddings
                            </FooterLink>
                            <FooterLink to='test'>
                                Portraits
                            </FooterLink>
                            <FooterLink to='test'>
                                Newborns
                            </FooterLink>
                            <FooterLink to='test'>
                                Boudiour
                            </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        SSS Photography
                    </SocialLogo>
                    <WebsiteRights>
                        SSS Photography © 2018 All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer