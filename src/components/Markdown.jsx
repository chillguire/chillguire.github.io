import { marked } from 'marked';

function Markdown({ text = '' }) {
	return (
		<div className='md-desc' dangerouslySetInnerHTML={{ __html: marked.parse(text) }} />
	);
}

export { Markdown }