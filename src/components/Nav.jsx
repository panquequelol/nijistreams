import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;

	& h1 {
		font-size: 1.25rem; /* 20px */
		line-height: 1.75rem; /* 28px */
	}
	& li {
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		padding: 0.25rem;
		border-radius: 0.25rem;
		font-size: 1.25rem; /* 20px */
		line-height: 1.75rem; /* 28px */
	}
	& li:hover {
		color: #404040;
		background-color: #fed7aa;
	}
	& a {
		text-decoration: none;
		color: black;
	}
`;

const StyledUl = styled.ul`
	display: flex;
	list-style: none;
	gap: 1rem;
`;

const Nav = () => {
	return (
		<StyledNav>
			<h1>
				<Link to='/'>🌈NIJISTREAMS</Link>
			</h1>
			<StyledUl>
				<li>
					<Link to='/streams'>Streams</Link>
				</li>
				<li>
					<Link to='/videos'>Videos</Link>
				</li>
			</StyledUl>
		</StyledNav>
	);
};

export default Nav;
