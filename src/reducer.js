// import {BUG_ADDED, BUG_REMOVED} from './actionTypes'
//OR
import * as actions from './actionTypes'
//Design the store
// let store = [
//     {id: 1,
//     description: "",
// resolved: false},
// {...},
// {...},
// ]

//Define the actions
// let action = {
    //the type can be written in camelCase
//     type: "BUG_ADDED",
//     payload: {
//         id: 1,
//         description: "..."
//     }
// }

//Create a reducer
let lastId = 0;
//using if else statement
// function reducer(state = [], action){
// if(action.type === 'bugAdded')
// return [
//     ...state, {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false 
//     }
// ];
// else if (action.type === 'bugRemoved')
// return state.filter(bug => bug.id !== action.payload.id)
// return state;
// }
//using switch case
// export default function reducer(state = [], action){
//     switch(action.type){
//         case "bugAdded": return [
//     ...state, {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false 
//     }
// ];
// case "bugRemoved": return state.filter(bug => bug.id !== action.payload.id)
//     default: return state;        
//     }
// }
export default function reducer(state = [], action){
    switch(action.type){
        case actions.BUG_ADDED: return [
    ...state, {
        id: ++lastId,
        description: action.payload.description,
        resolved: false 
    }
];
        case actions.BUG_RESOLVED: return [
    state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
        ];
case actions.BUG_REMOVED: return state.filter(bug => bug.id !== action.payload.id)
    default: return state;        
    }
}