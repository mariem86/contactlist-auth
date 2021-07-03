import axios from "axios";
import {GET_CONTACTS, SET_LOADING,} from "../const/actionType"

//add contact
export const addContact=(newContact)=> async (dispatch)=>{
  dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.post("/api/auth/addContact", newContact,options);
     dispatch(getContacts());
    } catch (error) {
      console.log(error)
    

    }
  };
   //get contact
   export const getContacts = () => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const res = await axios.get("/api/auth/all",options);
     dispatch({
        type: GET_CONTACTS,
        payload: res.data, 
      });
    } catch (error) {
    console.log(error)
    }
  };
  // delete contact
  export const  deleteContact = id => dispatch => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    const res =axios.delete(`/api/auth/deleteContact/${id}`,options);
      dispatch(getContacts());
    } catch (error) {
      const errorsArray = error.response.data.errors;
      const msg = error.response.data.msg
      if (Array.isArray(errorsArray)) {
        errorsArray.forEach((err) => alert(err.msg));
      }
      if (msg) {
        alert(msg);
      }

    }
    };
    // edit conttact
    export const editContact=(id ,updateContact)=>dispatch=>{
      dispatch(setLoading()); 
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
        const res =axios.put(`/api/auth/editContact/${id}`,updateContact,options)
        dispatch(getContacts());
      } catch (error) {
       console.log(error)
      
  
      }
      };

      const setLoading = () => (dispatch) => {
        dispatch({
          type: SET_LOADING,
        });
      };