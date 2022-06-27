//Currying is a technique that allows us to take a function that has arguments and convert it to a function that has a single argument 
function add (a){
    return function(b){
        return a + b;
    }
    
}
//using arrow functions
const add2 = a => b => a + b;
//In currying instead of separating arguments with comma, separate with parentheses
add(1)(5);
add1(5);