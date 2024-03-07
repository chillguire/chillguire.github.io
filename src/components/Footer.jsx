function Footer({ socials = []}) {
	return (
		<>
			<div>Footer</div>
			<ul>
				{
					socials.map((link, index) => {
						return (
							<li key={index}>
							</li>
						)
					})
				}
			</ul>
		</>
	);
}

export { Footer };
