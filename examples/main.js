
import { binary_search } from 'binary-search'
import { console_init } from 'html-console'

console_init('body')

let array = []
Array.from({ length: 26 }, function(each, index) {
	let value = String.fromCharCode(index + 97)
	array.push(value)
})

if (true) array = [
	'a', 'a', 'a', 'a', 'a', 'a', 
	'c', 'c', 'c', 'c', 'c', 
	'd', 'd', 'd', 'd', 'd'
]
console.log(`array: ${array}`)

let provider = create_provider(array)
let sequence = ['a', 'b', 'c', 'd', 'e']
sequence.forEach(function(value) {
	let result = binary_search(array, value, provider)
	if (result.index >= 0) console.log(`Found '${value}' at index ${result.index}.`)
	else console.log(`'${value}' inserts at ${result.insert}.`)
})

function create_provider(array) {
	return function(index) {
		return array[index]
	}
}
