import {GET_CONTACTS, SET_LOADING,} from "../const/actionType"
const initState = {
    contacts:[],
    isLoading: false,
    
   };
   export default function (state = initState, { type, payload }) {
       switch (type) {
        case SET_LOADING:
          return { ...state, isLoading: true };
       
           case GET_CONTACTS:
         return {
           ...state,
           contacts: payload , isLoading: false };
                 default:
                   return state;
               }
             }