import React from "react";
import { NavItem, NavListContainer } from "./NavListElements";

const navItems = [
	{ to: '', title: 'Home' },
	{ to: 'googleDorks', title: 'Google Dorks' },
	{ to: 'payloads', title: 'Payloads' },
	{ to: 'tools', title: 'Tools' },
	{ to: 'sec-list', title: 'SecList' },
];

const NavList = (props: any) => {
	return (		
		<NavListContainer isOpen={props.isOpen}>
			{navItems.map((navItem, index) => (<NavItem to={navItem.to} key={`nav-${index}`}>{navItem.title}</NavItem>))}			
		</NavListContainer>
	);
}

export default NavList;