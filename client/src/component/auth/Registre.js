import React, { useState,useEffect  } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../js/action/authAction";
import Swal from "sweetalert2"
const RegisterModal = (props) => {
    const history = useHistory();
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role:"",
    

  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfim = () => {
    dispatch(register(formData));
    
  };
  useEffect(() => {
   
    if (isAuth){
      history.push("/dashboard")
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Details has been registered successfully',
      showConfirmButton: false,
      timer: 2000
    })
  }
  })
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Register
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="firstName">first Name</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your name ...."
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name ...."
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={handleFormChange}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Email..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">password</Label>
              <Input
                onChange={handleFormChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
              />
            </FormGroup>
            <FormGroup>
            <select
                          className="form-control"
                          name="role"
                          id="role"
                      
                          onChange={handleFormChange}
                        >
                          <option value="">Select role</option>
                          <option value="client">client</option>
                         

                        </select></FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleConfim();
              toggle();
            }}
          >
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RegisterModal;
