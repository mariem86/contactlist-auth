import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner} from "react-bootstrap"




export default function AddContact({name,email,phone,setEmail,setPhone,setName,edit,action}) {
 /* const { isLoading } = useSelector((state) => state.contactReducer);
  //spinner
  if ( isLoading) {
    return <div><Spinner animation="grow" /></div>
    }*/
    return (
        <div className="container contact">
        <div className="row">
            <div className="col-md-3">
                <div className="contact-info">
                    <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                    <h2>Contact Us</h2>
                    <h4>We would love to hear from you !</h4>
                </div>
            </div>
            <div className="col-md-9">
                <div className="contact-form">
                    <div className="form-group">
                      <label className="control-label col-sm-2" for="fname">First Name:</label>
                      <div className="col-sm-10">          
                        <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname"
                        value={name} onChange={(e)=>setName(e.target.value)}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" for="lname">Phone:</label>
                      <div className="col-sm-10">          
                        <input type="text" class="form-control" id="lname" placeholder="Enter Phone"  value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" for="email">Email:</label>
                      <div className="col-sm-10">
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      </div>
                    </div>
                    
                    <div class="form-group">        
                      <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default"  value={edit?"edit contact":"add contact"}  onClick={action}>ADD</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}
