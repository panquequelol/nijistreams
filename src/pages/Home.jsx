import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiggerButton } from '../components/StyledButton';
import StyledMain from '../components/StyledMain';
import BannerImage from '../static/img/banner.png';

const StyledBanner = styled.img`
	bottom: 0;
	height: 48.7vh;
	object-fit: cover;
	object-position: top;
	width: 100%;
	display: flex;
	@media (max-width: 768px) {
		position: fixed;
		width: 200%;
	}
`;

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

const DivButtons = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
`;

const Home = () => {
	let navigate = useNavigate();

	return (
		<>
			<StyledMain>
				<StyledMainDiv>
					<h1>Never miss a stream!</h1>
					<p>
						Check if your favorite liver is streaming, and if not, just binge watch
						some videos in the meantime ;^)
					</p>
					<DivButtons>
						<BiggerButton
							primary
							onClick={() => {
								navigate('/streams');
							}}
						>
							Browse streams
						</BiggerButton>
						<BiggerButton
							onClick={() => {
								navigate('/videos');
							}}
						>
							Browse videos
						</BiggerButton>
					</DivButtons>
				</StyledMainDiv>
			</StyledMain>
			<StyledBanner src={BannerImage} alt="Most of Nijisanji's vtubers" />
		</>
	);
};

export default Home;
