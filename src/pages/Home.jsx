import React from 'react';
import styled from 'styled-components';
import { BiggerButton } from '../components/StyledButton';
import StyledMain from '../components/StyledMain';

const StyledBanner = styled.img`
	width: 100%;
	bottom: 0;
	display: flex;
	@media (max-width: 768px) {
		position: fixed;
		width: 200%;
	}
`;

// const StyledMain = styled.main`
// 	max-width: 72rem;
// 	margin-left: auto;
// 	margin-right: auto;
// `;

const StyledMainDiv = styled.div`
	margin: auto;
	width: 50%;
	padding: 1rem;
	text-align: center;
	font-size: 1.25rem; /* 20px */
	line-height: 1.75rem; /* 28px */
	& h1 {
		font-size: 4.5rem; /* 72px */
		line-height: 1;
		margin-bottom: 0;
	}
	@media (max-width: 768px) {
		width: 75%;
		& h1 {
			font-size: 3rem; /* 48px */
			line-height: 1;
		}
	}
`;

// const Button = styled.button`
// 	border: none;
// 	padding: 0.3rem 0.6rem;
// 	background-color: ${(props) => (props.primary ? '#f97316' : '#ffedd5')};
// 	color: ${(props) => (props.primary ? 'white' : 'black')};
// 	border-radius: 0.25rem;
// 	font-weight: 700;
// `;

// const BiggerButton = styled(Button)`
// 	padding: 1rem 1rem;
// 	@media (max-width: 768px) {
// 		padding: 0.8rem 0.8rem;
// 	}
// `;

const Home = () => {
	return (
		<>
			<StyledMain>
				<StyledMainDiv>
					<h1>Never miss a stream!</h1>
					<p>
						With Nijistreams you can check if your favorite Liver is currently
						streaming
					</p>
					<div>
						<BiggerButton primary>Browse streams</BiggerButton>
						<BiggerButton>Browse videos</BiggerButton>
					</div>
				</StyledMainDiv>
			</StyledMain>
			<StyledBanner
				src='https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/83342244bfec488d94cc1e0e3b477b9c/NIJISANJI_ALL_transparent_withCR.png?fit=clip&w=1366&dpr=2'
				alt=''
			/>
		</>
	);
};

export default Home;
