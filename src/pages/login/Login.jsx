import { Link } from "react-router-dom";
import React from 'react';
import "./login.css";
import axios from 'axios';


class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      password: '',
    }
  }

    handlesubmitlogin = e => {
      console.log('hi');

        e.preventDefault();
        console.log(this.state);
        let formData = new FormData();
        formData.append("text",this.state.text);
        formData.append("password",this.state.password);
        
        const url= "http://localhost/react-backend/login.php";
        axios.post(url,formData)
        .then( res=> console.log(res.data))
        .catch( err => console.log(err));
    }

    render() {

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" value={this.state.text} onChange={e => this.setState({ text : e.target.value })} type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" value={this.state.password} onChange={e => this.setState({ password : e.target.value })} type="password" placeholder="Enter your password..." />
        <button className="loginButton"  onClick={this.handlesubmitlogin} >Login</button>
      </form>
        <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
    </div>
  );
  }
}

export default Login;