export function reducer(state, action){
    switch(action.type){
        case "SET_QUESTIONS":
            state.questions = action.payload.questions;
            return {...state};
        default:
            return state;
    }
}