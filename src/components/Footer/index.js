import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinkS, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {

    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Dolla</FooterLinkTitle>
                            <FooterLinkS to='about'>About Us</FooterLinkS>
                            <FooterLinkS to='discover'>How it works</FooterLinkS>
                            <FooterLinkS to='discover'>Testimonials</FooterLinkS>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLinkS to='hero'>Contact</FooterLinkS>
                            <FooterLinkS to='hero'>Support</FooterLinkS>
                            <FooterLinkS to='hero'>Destinations</FooterLinkS>
                            <FooterLink to='/'>Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLinkS to='hero'>Submit Video</FooterLinkS>
                            <FooterLinkS to='hero'>Ambassadors</FooterLinkS>
                            <FooterLinkS to='hero'>Agency</FooterLinkS>
                            <FooterLink to='/'>Influencer</FooterLink>
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLinkS to='hero'>Instagram</FooterLinkS>
                            <FooterLinkS to='hero'>Facebook</FooterLinkS>
                            <FooterLinkS to='hero'>Youtube</FooterLinkS>
                            <FooterLink to='/'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'  onClick={toggleHome}>dolla</SocialLogo>
                        <WebsiteRights>Bromo &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.twitter.com/bromo___' target='_blank' aria-label='LABELLLL' ><FaFacebook /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='LABELLLL' ><FaInstagram /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='LABELLLL' ><FaYoutube /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='LABELLLL' ><FaTwitter /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='LABELLLL' ><FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
