function Footer({ socials = [] }) {
	return (
		<footer>
			<div className='footer'>
				<ul>
					{
						socials.map((link, index) => {
							return (
								<li key={index}>
									{link.social}

								</li>
							)
						})
					}
				</ul>
			</div>
		</footer>
	);
}

export { Footer };
