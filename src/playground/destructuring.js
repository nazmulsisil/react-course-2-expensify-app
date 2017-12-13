//////////////////////////
// object Destructuring //
//////////////////////////

// const person = {
// 	name: 'Nazmul',
// 	age: 26,
// 	location: {
// 		city: 'Bangladesh',
// 		temp: 16
// 	}
// };
// 
// const { name = "Anonymous", age } = person;
// const { city, temp: taapMatra } = person.location;
// console.log( `${name} of ${city} is ${age}. ${taapMatra} deg there!` );

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		//name: 'Penguin'
// 	}
// };

// const { name: publisherName = "self-published" } = book.publisher;
// console.log(publisherName); 


//
// Array destructuring
// 

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice, ] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);