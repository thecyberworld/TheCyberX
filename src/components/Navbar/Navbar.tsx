import React from 'react';
import {BsGithub, BsGripVertical} from 'react-icons/bs';
import { NavbarContainer, LogoContainer, GitHubIcon, Logo, NavContent, IconContainer, MenuToggleIcon } from "./NavbarElements";
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
                        <GitHubIcon>
                            <BsGithub/>
                        </GitHubIcon>
            
                        <MenuToggleIcon onClick={this.toggleMenu}>
                            <BsGripVertical />
                        </MenuToggleIcon>
                    </IconContainer>

                </NavbarContainer>
                <NavList isOpen={this.state.isMenuOpen} />
                </>
        );
    }
}

export default Navbar;
