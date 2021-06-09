import React from 'react'
import {deleteContact} from "../../js/action/contactAction"
import { useDispatch, useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2"
function ContactItems({contact,getPerson}) {
    
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer);
    const deleteContactt=()=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        dispatch(deleteContact(contact._id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    }
    return (
        
        
        <div class="card"  >
  
        <div class="card-body">
          <h5 class="card-title">Name:</h5>
          <p class="card-text">{contact.name}</p>
          <h5 class="card-title">Email:</h5>
          <p class="card-text">{contact.email}</p>
          <h5 class="card-title">Phone:</h5>
          <p class="card-text">{contact.phone}</p>
          <button type="button" class="btn btn-danger" onClick={ deleteContactt}>Delete</button> 
            <button type="button" class="btn btn-danger"   onClick={()=>getPerson(contact)}>Edit</button>
        </div>
      </div>

      
      
    )
}


export default ContactItems

