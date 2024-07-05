export const findTitle = (pages = [], currPath = '') => {
	for (let i = 0; i < pages.length; i++) {
		if (pages[i].path === currPath.replace(/^(\/.*?)(\/+)?$/, '$1') && typeof pages[i].title === 'string') {
			return pages[i].title;
		} else if (pages[i].children) {
			const found = findTitle(pages[i].children, currPath);
			if (found) return found;
		}
	}
}

export const truncate = (text = '') => {
	let trimmedString = text.substr(0, 120);
	return trimmedString = `${trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))}...`;
}

export const arrayToCommaString = (arr = []) => {
	let endString = '';
	arr.forEach((el, i) => {
		endString += (i === arr.length - 1) ? el : `${el}, `;
	});

	return endString;
}

export const urlify = (text = '') => {
	return text.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-').replace(/[^\w-]+/g, '');
}

export const awaitTimeout = async (delay = 1000) => {
	return new Promise(resolve => setTimeout(resolve, delay));
}
