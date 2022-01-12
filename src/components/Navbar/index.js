import React, {useState, useEffect} from 'react';
import {FaBars} from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from "./NavbarElements";

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }
        else{
            setScrollNav(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav);
    },[]);

    const toggleHome=()=>{
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        dolla
                    </NavLogo>
                    <MobileIcon onClick = {toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks smooth={true} duration={500} 
                            spy={true}
                             exact="true" offset={-80} to="about" 
                            
                            // if we didnt use style components, we use activeClass='active' instead of spy={true}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks  smooth={true} duration={500} 
                            spy={true}
                             exact="true" offset={-80} to="discover"
                            
                            // if we didnt use style components, we use activeClass='active' instead of spy={true}
                             >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks  smooth={true} duration={500} 
                            spy={true}
                             exact="true" offset={-80} to="services"
                            
                            // if we didnt use style components, we use activeClass='active' instead of spy={true}
                             >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks  smooth={true} duration={500} 
                            spy={true}
                             exact="true" offset={-80} to="signup"
                            
                            // if we didnt use style components, we use activeClass='active' instead of spy={true}
                             >Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
