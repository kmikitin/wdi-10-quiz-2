console.log('Allons-y!');

// 1. Combine objects, arrays, and functions
// Create an object that has a property that is an array. Log one of the elements of that array.
let theDoctor = {
	regeneration: 'Ten',
	catchPhrase: 'Allons-y!',
	companions: ['Rose', 'Martha', 'Donna']
}

console.log("My favorite companion of " + theDoctor.regeneration + " is " + theDoctor.companions[2] + ".");

// Create an object that has a property that is an object. Log one of the properties of that inner object.
let hermione = {
	house: 'Gryffindor',
	pet: {
		name: 'Crookshanks',
		sex: 'Male',
		type: 'Fluffy ginger monster'
	},
	friends: ['Harry', 'Ron']
}

console.log(hermione.pet.name);

// Create an object that has a property that is a function (method). Call that method.
let serenity = {
	crew: 5,
	crewMembers: ['Mal', 'Jayne', 'Wash', 'Kaylee', 'Zoe'],
	peopleOnBoard: 6,
	passengers: ['Inara'],
	newPassengers: (num, name) => {
		serenity.peopleOnBoard += num;
		serenity.passengers.push(name); 
	}

}

serenity.newPassengers(1, 'River');


// 2. Combine objects, arrays, and functions
// Create a function that returns an object that has an array. Log one of the elements of that array.
//* I PLAN TO COME BACK TO THIS

let thisFunction = () => {

}

// Create an object that has a method that returns an object. Log a property of the inner object.

let thisObj = {

}

// Create an array that has a function that returns an object that has an array. Log an element of the inner array.

let thisArray = []


// 3. Create a callback
// Define two functions and set them to variables
// The second function takes a parameter
// Call the second function, passing in the variable that references the first function as the parameter
// In the definition of the second function, invoke (call) the parameter that is being passed into it. Remember, this parameter is a function

let firstFunction = () => {
	console.log('calling the first function');
}

let secondFunction = (callFunction) => {
	callFunction();
	console.log('running the second function');
}

secondFunction(firstFunction);

// 4. Indentation
// Correctly indent the following code:

if(true) {
   const a = 2 + 2;
   console.log(a);
}

if(true){
   if(false){
    console.log('hi');
   }
}

// 5. Semantic naming of variables
// Fix this variable to have a better name:

const numbers = [2, 4, 6, 8, 10];

// 6. Function definition placement
// Clean up this code, so that it works and has function definitions in the correct place

const bar = () => {
    console.log('bar here');
}

bar();

const foo = () => {
    console.log('foo here');
}

foo();

// 7. Commenting code
// Write your own comments for each line of code:

// add two numbers together and return the total 
// function takes two numbers as parameters
const addTwoNums = (firstNum, secondNum) => {
	// create a variable to hold the total
	// add the two numbers together
    const finalValue = firstNum + secondNum;
    // return the total
    return finalValue;
}

// 8.
// Describe some common programming principles
/* Keep your code as simple as possible to do the task it needs to execute. If someone else were to read your code or use it they should be able to do so without a lot of extra work. Also, if something works keep using it! Don't try to re-invent the wheel.*/

// Error reading
// What is meant by the error this produces?

foo();

const foo (=) ()=>{
    console.log('hi');
}

// The function is being called before it's defined AND it needed an equal sign after "foo" (which I put in ()) to acutally define it. 


// 9.
// Fix the following code so the log executes (don't change the if statement):

const b = '5';

if(b === '5'){ //will be false
    console.log('this line should execute');
}

// Fix the following code so the value 10 is logged (change only the line that has the console.log on it):

const a = 5;
console.log(5 + a);









