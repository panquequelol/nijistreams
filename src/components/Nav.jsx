import React from 'react';
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
		font-size: 1.25rem; /* 20px */
		line-height: 1.75rem; /* 28px */
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
			<h1>🌈NIJISTREAMS</h1>
			<StyledUl>
				<li>Home</li>
				<li>Browse</li>
			</StyledUl>
		</StyledNav>
	);
};

export default Nav;
