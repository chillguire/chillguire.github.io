export const findTitle = (pages = [], currPath = '') => {
	for (let i = 0; i < pages.length; i++) {
		if (pages[i].path === currPath && typeof pages[i].title === 'string') {
			return pages[i].title;
		} else if (pages[i].children) {
			const found = findTitle(pages[i].children, currPath);
			if (found) return found;
		}
	}
}

export const urlify = (text = '') => {
	return text.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-').replace(/[^\w-]+/g, '');
}
