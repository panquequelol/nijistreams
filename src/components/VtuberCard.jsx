import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.article`
	& h1,
	h4,
	p,
	a {
		margin: 0;
	}

	& h1 {
		font-weight: 500;
	}
	& h4 {
		font-weight: 400;
		font-size: 0.75rem; /* 12px */
		line-height: 1rem; /* 16px */
	}

	& .secondaryText {
		color: #404040;
	}

	display: flex;
	flex-direction: column;
	max-width: 29rem;

	& a {
		text-decoration: none;
		color: black;
	}
`;

const StyledChannel = styled.a`
	display: flex;
	align-items: center;
	text-align: center;
	gap: 1rem;
	margin-top: 1rem;
	margin-bottom: 1rem;

	border: solid 0.25rem;
	border-radius: 0.5rem;
	padding: 0.25rem;
	border-color: transparent;

	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;

	& .channelName {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: start;
	}

	&:hover {
		border-color: #f97316;
		background-color: #fdba74;
	}
`;

const StyledStream = styled.a`
	display: flex;
	flex-direction: column;

	border: solid 0.25rem;
	border-radius: 0.5rem;
	padding: 0.25rem;
	border-color: transparent;

	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	&:hover {
		border-color: #f97316;
		background-color: #fdba74;
	}

	& img {
		max-width: 90vw;
		border-radius: 0.25rem;
	}

	& .title {
		font-weight: 700;
		font-size: 1.125rem; /* 18px */
		line-height: 1.75rem; /* 28px */
		margin-top: 1rem;
	}
`;

const StyledAvatar = styled.img`
	height: 4rem;
	width: 4rem;
	border-radius: 9999px;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const VtuberCard = ({
	name,
	channelName,
	live_id,
	channelPhoto,
	live_title,
	topic_id,
	live_viewers,
	channelId,
}) => {
	return (
		<StyledCard>
			<StyledStream
				href={`https://www.youtube.com/watch?v=${live_id}`}
				target='_blank'
			>
				<img
					src={`https://img.youtube.com/vi/${live_id}/hqdefault.jpg`}
					alt={`${name}'s stream thumbnail`}
				/>
				<p className='title'>{live_title}</p>
				<p className='secondaryText'>
					{' '}
					<strong>❤️Viewers:</strong> {live_viewers} <strong>✨Topic:</strong>{' '}
					{topic_id || 'none'}
				</p>
			</StyledStream>
			<StyledChannel
				href={`https://www.youtube.com/channel/${channelId}`}
				target='_blank'
			>
				<StyledAvatar src={channelPhoto} alt={`${name}'s channel photo`} />
				<div className='channelName'>
					<h1>{name}</h1>
					<h4 className='secondaryText'>{channelName}</h4>
				</div>
			</StyledChannel>
		</StyledCard>
	);
};

export default VtuberCard;
