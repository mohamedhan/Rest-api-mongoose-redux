import {GET_CONTACTS} from '../constants/actionTypes'

const initState = { contacts: [] };

export const Reducer=(state=initState,action)=>{
    switch(action.type){
        case GET_CONTACTS:
            return {...state,contacts:action.payload}

        default:return state    
    }
}