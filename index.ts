import { log } from 'console'

// an interface
interface Interface {
	property: string
}

// a class
export class Class implements Interface {
	constructor(public property: string) {}
}

// a function
function Function(thing: Interface) {
	log(thing.property)
}

type Type = Interface & string

const o = {
	property: 'value',
}
// using them
const thing: Class = new Class('hello')
Function(thing)
