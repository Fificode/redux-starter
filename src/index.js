import store from './store';
import { bugAdded, bugResolved } from './actionCreators';
const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
})
store.dispatch(
    bugAdded("Bug 1")
);

// unsubscribe();

store.dispatch(bugResolved(1));
// store.dispatch(
//     {
//         type: actions.BUG_REMOVED,
//         payload: {
//             id: 1
//         }
//     }
// );

console.log(store.getState());
// import {compose, pipe} from 'lodash/fp';
//import {Map} from 'immutable';
// import {produce} from 'immer';
//Functional programming
// function sayHello(){
//     return "Hey World";
// }

// function sayHello(){
//     return function(){
//         return "Hello World";
//     }
// }
// let fn = sayHello();
// let message = fn();

//Function can be assigned to a variable
// let fn = sayHello;
// fn();

//Function can be passed as an argument to another function
// function greet(fnMessage){
// console.log(fnMessage());
// }

// greet(sayHello);


//Higher order functions take a function as an argument
//Higher order function example 1- map
// let numbers = [1,2,3];
// numbers.map(number => number * 3);

//Higher order function example 2- setTimeout
// setTimeout(() => console.log("Hello"), 1000);

//This is a non functional style of code 
// let input = "   Javascript    ";
// let output = "<div>" + input.trim() + "</div>";

//Using functional programming technique
// const trim = str => str.trim();
// const wrap = type => str =>`<${type}>${str}</${type}>`;
// const toLowerCase = str => str.toLowerCase();

//This is Function composition 
//Compose is another example of an higher order function
//To get compose and pipe; install lodash into your code
// const transform = compose(wrapInDiv, toLowerCase, trim);
// transform(input);

//Read your code from right to left, so we use pipe instead
//Every argument to a pipe function needs to be a function
// const transform = pipe(trim, toLowerCase, wrap("div"));
// console.log(transform(input));

//Previous composition method but it's kinda messy and not cute
// const result = wrapInDiv(toLowerCase(trim(input))); 

//How to do immutability for objects in js(there are two ways)
// const person = {name: "John"};
//First method- use assign
//it copies all the properties of the person object into the empty object
// Object.assign({}, person)
//optionally, the third argument we can supply the updated property
// const updated = Object.assign({}, person, {name: "Peter", age : 30})
// console.log(updated);

//Second method- spread operator
// const updated = {...person, name: "Bob"};

//Spread operator in nested objects
// const person = {name: "John", address: {
//     country: "USA",
//     city: "New York"
// }
// }
// const updated = {
//     ...person, address: {
//         ...person.address,
//         city: "New Jersey"
//     },
// name: "Bob"
// };
// console.log(person);

//How to do immutability for arrays in js
// const numbers = [1, 2, 3];
//Adding 
//At the beginning
// const added = [4, ...numbers];
//At any position
//get the index of the number it should be before
// const index = numbers.indexOf(2);
//copy all the numbers before 2, excluding 2
// const added = [...numbers.slice(0, index),
//      4,
//     ...numbers.slice(index)];
//     console.log(added);

    //Removing
    //To return all the numbers except 2
    // const removed = numbers.filter(n => n !== 2);
    // console.log(removed);

    //Updating
    //To replace 2 with 20
    // const updated = numbers.map(n => n === 2 ? 20 : n);
    // console.log(updated);

    //Using Immutable library
    //use the map property
    // let book = Map({title: "Harry Potter"});
//mutable method
// let book = {title : "Harry Potter"};
//     function publish(book){
// book.isPublished = true;
//     }
//     publish(book);
//when using immmutable library
//   function publish(book){
    //use "set"
//  return book.set("isPublished", true);
    // }
//    book = publish(book);
//Have to call "get"
    // console.log(book.get("title"));

    //but when working with plain js object
    // console.log(book.toJS("title"))

    //Using Immer library
    // let book = {title : "Harry Potter"};
    // function publish(book){
        //call the produce function and give it two arguments
        //the first arg is the initial state, second arg is a function that specifies our mutations
// return produce(book, draftBook => {
    //mutating code can be written here
    // draftBook.isPublished = true;
// })
    // }
    // let updated = publish(book);
    // console.log(book);
    // console.log(updated);