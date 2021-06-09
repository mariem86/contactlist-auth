import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getContacts ,addContact,editContact} from "../../js/action/contactAction"
import AddContact from "./AddContact";
import ContactItems from "./ContactItems";
import Swal from "sweetalert2"
import {Spinner} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
 
function ContactList () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState(0)
  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contacts);
 /* const { isLoading } = useSelector((state) => state.contactReducer);*/
  const { user } = useSelector((state) => state.authReducer);
  //get contact
  useEffect(() => {
    dispatch(getContacts());
  }, []);
//add contact
  const addContactt = () => {
    if( (name.trim() !== "") &&(phone.trim() !== "") && (email.trim() !== "") ){
    dispatch(addContact({ name,phone,email }));
  
    setName('');
    setPhone('');
    setEmail('');
    Swal.fire('Good job!',"contact added with success","success")
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'please fill in the fields!!'})} 
  };
 //edit contact
 const editContactt=()=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You would save the modified field!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, save modif!'
  }).then((result) => {
    if (result.isConfirmed) {
  dispatch(editContact(id,{id,name,email,phone}))
  Swal.fire(
    'Saved!',
    'Your change has been saved.',
    'success'
  )
}
})
  setEdit(false)
  setEmail("")
  setId(0)
  setPhone("")
  setName("")
}

const getPerson=(contact)=>{
  setEmail(contact.email)
  setName(contact.name)
  setPhone(contact.phone)
  setId(contact._id)
  setEdit(true)

}
   //spinner
  /*if (isLoading) {
    return <div><Spinner animation="grow" /></div>
    }*/
   
    return (
      <div>
       
       <div>
<AddContact name={name} phone={phone}email={email} 
  setName={setName} setPhone={setPhone} 
  setEmail={setEmail} 
  //addContactt={addContactt}
   action={edit?  editContactt : addContactt }
  />
</div>  

          
  < div style={{ display: "flex", flexWrap: "wrap" }}>
{ contacts.map((contact,i)=>
    <ContactItems key ={i} contact={contact}  getPerson={getPerson} />
)}
    </div>
    
    </div>
    )
}
export default ContactList

