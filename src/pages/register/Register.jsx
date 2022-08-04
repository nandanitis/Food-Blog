import "./register.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import React from 'react';



class Register extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      email: '',
      password: '',
    }
  }

    handlesubmitregister = e => {
      

        e.preventDefault();
        console.log(this.state);
        let formData = new FormData();
        formData.append("text",this.state.text);
        formData.append("email",this.state.email);
        formData.append("password",this.state.password);
        
        const url= "http://localhost/react-backend/login.php";
        axios.post(url,formData)
        .then( res=> console.log(res.data))
        .catch( err => console.log(err));
    }


  render() {

    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text"  value={this.state.text} onChange={e => this.setState({ text : e.target.value })} placeholder="Enter your username..." required />
        <label>Email</label>
        <input className="registerInput" type="email" name="email" id='email'  value={this.state.email} onChange={e => this.setState({ email : e.target.value })} placeholder="Enter your email..." required />
        <label>Password</label>
        <input className="registerInput" type="password" value={this.state.password} onChange={e => this.setState({ password : e.target.value })} placeholder="Enter your password..." required />
        <button className="registerButton"  onClick={this.handlesubmitregister} >Register</button>
      </form>
        <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
    </div>
    )
  }
}

export default Register;