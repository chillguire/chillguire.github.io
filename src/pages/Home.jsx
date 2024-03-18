import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SiJavascript, SiPostgresql, SiMysql, SiPython } from 'react-icons/si';

import { Markdown } from '../components/Markdown';

function Home() {
	const [aboutInfo, setAboutInfo] = useState({});
	const icons = [
		SiJavascript,
		SiPostgresql,
		SiMysql,
		SiPython,
	];

	useEffect(() => {
		const getAboutInfo = async () => {
			const { self } = await import('../consts/about');
			setAboutInfo(self);
		}
		getAboutInfo();
	}, []);

	return (
		<>
			<div className='vw-85 m-auto'>
				<h1 className='about-title'>{`${aboutInfo.title}`}</h1>
				<div className='about-details'>
					<div className='about-desc'>
						<Markdown text={aboutInfo.summary} />
						<div className='project-buttons'>
							<Link className='btn' to='/projects'>Proyectos</Link>
							<Link className='btn' to={aboutInfo.resume} target='_blank' rel='noopener noreferrer'>CV</Link>
						</div>
					</div>
					<div className='about-skills'>
						<div className='card2'>
							<ul className='icon-group'>
								{
									aboutInfo.relevantSkills?.map((skill, index) => {
										const SkillIconComponent = icons.find((icon) => {
											return icon.name.toLowerCase().includes(skill.toLowerCase())
										});
										return (
											<li key={index}>
												<IconContext.Provider
													value={{ className: `${SkillIconComponent.name} icon`, size: '2em' }}
												>
													<SkillIconComponent />
												</IconContext.Provider>
											</li>
										)
									})
								}
							</ul>
							{
								aboutInfo.skills?.map((skill, index) => {
									return (
										<div className='card2-title' key={index}>
											<h4>{skill.name}</h4>
											<div className='skill-group'>
												{skill.elements.map((element, key) => (
													<span className='skill' key={key}>{element}</span>
												))}
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>

			</div>
		</>
	);
}

export default Home;
