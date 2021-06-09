import {GET_CONTACTS, SET_LOADING,} from "../const/actionType"
const initState = {
    contacts:[],
    
   };
   export default function (state = initState, { type, payload }) {
       switch (type) {
       
           case GET_CONTACTS:
         return {
           ...state,
           contacts: payload };
                 default:
                   return state;
               }
             }