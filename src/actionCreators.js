import * as actions from './actionTypes';
// export function bugAdded(description){
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: "Bug1"
//         }
//     };
// }

//Using arrow function
export const bugAdded = description => ({
    type: actions.BUG_ADDED,
        payload: {
            description
        }});
export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
        payload: {
            id
        }});