import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./component/route/PrivateRoute";
import { getAuthUser } from "./js/action/authAction";

import Home from "./component/pages/Home";
import Dashboard from "./component/pages/Dashboard"
import AppNavbar from "./component/AppNavbar";
import ContactList from "./component/contact/ContactList"

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <AppNavbar />
      <Switch>
      
        
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" render={() => ( <Dashboard />  )}  />
        < PrivateRoute path="/Contact-list" component={ContactList}/>


        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
