// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-moduleNames') // line 4 and 5 are basically eaqual.
const {john, peter} = require('./4-moduleNames') // the difference is that in line 5 is destructered.
const sayHi = require('./5-util')

console.log(names)

sayHi('Susan')
sayHi(john)
sayHi(peter)

console.log('---------------------');

// another option is to go with properties, using the properties of names as fallow:
sayHi(names.john)
sayHi(names.peter)