import { useEffect, useState } from 'react';

function Home() {
	const [aboutInfo, setAboutInfo] = useState({});

	useEffect(() => {
		const getAboutInfo = async () => {
			const { self } = await import('../consts/about');
			setAboutInfo(self);
		}
		getAboutInfo();
	}, []);

	return (
		<>
			<div>{`${aboutInfo.title}`}</div>
			<div>{`${aboutInfo.summary}`}</div>
			<div>{`${aboutInfo.relevantSkills}`}</div>
			<div>{`${aboutInfo.skills}`}</div>
			<div>{`${aboutInfo.resume}`}</div>
		</>
	);
}

export default Home;
