import styled, { keyframes }  from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';

export const NavListContainer = styled.div<{isOpen: boolean}>`
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 98;
	padding: 80px 20px;
	display: flex;
	flex-direction: column;
	width: 150px;
	background: #2a2a2a;
	transition: transform 0.4s ease-in-out;
	transform: ${props => props.isOpen ? 'translate(0)' : 'translate(120vw)'};
	`;

export const NavItem = styled(LinkRouter)`
	margin: 1rem;
	color: #fff;
  cursor: pointer;
  text-decoration: none;

	&:hover {
		color: #aaa;
  }
`;