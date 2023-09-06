
function binary_search_(left, right, value, provider, bias) {
	
	bias = bias || 1
	if (! (left <= right)) return { index: -1, insert: left }
	let middle = Math.floor((right + left) / 2)
	if (bias === 1 && value.localeCompare(provider(middle - 1)) === 0) {
		return binary_search_(left, middle - 1, value, provider, bias)
	} else if (bias === -1 && value.localeCompare(provider(middle + 1)) === 0) {
		return binary_search_(middle + 1, right, value, provider, bias)
	} else if (value.localeCompare(provider(middle)) === 0) {
		return { index: middle }
	} else {
		if (value.localeCompare(provider(middle)) < 0) right = middle - 1
		else if (value.localeCompare(provider(middle)) > 0) left = middle + 1
		return binary_search_(left, right, value, provider, bias)
	}
}

export function binary_search(array, value, provider, bias) {
	return binary_search_(0, array.length - 1, value, provider, bias)
}
