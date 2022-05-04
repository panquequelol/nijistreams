import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StyledMain from '../components/StyledMain';
import VtuberCard from '../components/VtuberCard';
import styled from 'styled-components';

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 1rem;
	@media (min-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	@media (min-width: 1280px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
`;

const Streams = () => {
	const [vtuberData, setVtuberData] = useState([]);
	const [liveCount, setLiveCount] = useState(0);

	const apiCall = async () => {
		const { data } = await axios.get('https://holodex.net/api/v2/live', {
			params: { org: 'Nijisanji', status: 'live' },
		});
		setVtuberData(data);
	};

	useEffect(() => {
		apiCall();
	}, []);

	return (
		<StyledMain>
			<h3>Check out these streams!</h3>
			<StyledGrid>
				{vtuberData.map((v, index) => {
					if (v.live_viewers !== 0) {
						setLiveCount((prev) => (prev += 1));
						return (
							<VtuberCard
								key={index}
								name={v.channel.english_name}
								channelName={v.channel.name}
								live_id={v.id}
								channelPhoto={v.channel.photo}
								live_title={v.title}
								topic_id={v.topic_id}
								live_viewers={v.live_viewers}
								channelId={v.channel.id}
							/>
						);
					}
				})}
			</StyledGrid>
			{!(liveCount) && 'Looks like there is no one live right now :('}
		</StyledMain>
	);
};

export default Streams;
