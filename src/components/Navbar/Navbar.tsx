import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavbarContainer, LogoContainer, Logo, NavContent, IconContainer, Icon } from "./NavbarElements";
import logo from "../../assets/thecyberworld-green01.png"
import NavList from './NavList';

class Navbar extends React.Component {
    state = {isMenuOpen: false}

    toggleMenu = () => {
        const menuState = this.state.isMenuOpen;
        this.setState({ isMenuOpen: !menuState });
    }

    render() {
        return (
            <>
                <NavbarContainer>
                    <LogoContainer>
                        <Logo src={logo} alt={"thecyberworld-logo"}/>
                    </LogoContainer>
            
                    <NavContent>
                        <h3>ThecyberX</h3>
                    </NavContent>
            
                    <IconContainer>
                        <Icon>
                            <BsGithub/>
                        </Icon>
            
                        <Icon onClick={this.toggleMenu}>
                            <AiOutlineMenu />
                        </Icon>
                    </IconContainer>

                </NavbarContainer>
                <NavList isOpen={this.state.isMenuOpen} />
                </>
        );
    }
}

export default Navbar;
