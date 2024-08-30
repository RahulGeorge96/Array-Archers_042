import { USERLOGGEDIN } from "./actions";

export const initstate = {
  isLoggedIn : true
}

export function Reducer (state = initstate, action){
  switch(action.type){
    case USERLOGGEDIN:
      return ({...state, isLoggedIn : !(state.isLoggedIn)})
    default:
      return state
  }
}