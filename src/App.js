import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Button , Form , FormGroup , Label , Input } from  "reactstrap" ; 
import { FacebookLoginButton } from "react-social-login-buttons";

function App() {
  return (
    <div class="container-fluid">
    <Form className="login-form">
     
      <h1><span Classname="front-weight-bold"> Register Form </span></h1>
      <FormGroup>
  <Label> Name</Label>
  <Input type="text" placeholder="Name"/>
</FormGroup>
<FormGroup>
  <Label>Lastname</Label>
  <Input type="text" placeholder="Last Name"/>
</FormGroup>
<FormGroup>
  <Label>Email</Label>
  <Input type="email" placeholder="Email"/>
</FormGroup>
<FormGroup>
  <Label>Password</Label>
  <Input type="password" placeholder="Type your password"/>
</FormGroup>
<button className="btn-lg btn-dark btn-block"> Log in </button>
<div className="text-center pt-3 " > Or log in with your Facebook account</div>
<FacebookLoginButton className="mt-3 mb-3"/>
<div className="text-center">
  < a href="sing-up"> Sign up </a>
  < span className="P-2" >|</span>
  < a href="forgot-password"> Forgot Password </a>
</div>
</Form></div>
  );
}

export default App;
