
function binary_search_(left, right, value, provider, collator) {
	
	if (! (left <= right)) return { index: -1, insert: left }
	let middle = Math.floor((right + left) / 2)
	if (collator.compare(value, provider(middle - 1)) === 0) {
		return binary_search_(left, middle - 1, value, provider, collator)
	} else if (collator.compare(value, provider(middle)) === 0) {
		return { index: middle }
	} else {
		if (collator.compare(value, provider(middle)) < 0) right = middle - 1
		else if (collator.compare(value, provider(middle)) > 0) left = middle + 1
		return binary_search_(left, right, value, provider, collator)
	}
}

export function binary_search(array, value, provider) {
	
	const collator = new Intl.Collator()
	return binary_search_(0, array.length - 1, value, provider, collator)
}
