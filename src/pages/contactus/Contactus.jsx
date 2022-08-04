import React, {useState, useEffect, Component} from 'react';
import './contactus.css'
import axios from 'axios';



class Contactus extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      phone: '',
      email: '',
      message: '',
    }
  }
    handlesubmit = e => {
        e.preventDefault();
        console.log(this.state);
        let formData = new FormData();
        formData.append("text",this.state.text);
        formData.append("phone",this.state.phone);
        formData.append("email",this.state.email);
        formData.append("message",this.state.message);
        const url= "http://localhost/react-backend/index.php";
        axios.post(url,formData)
        .then( res=> console.log(res.data))
        .catch(err => console.log(err));
    }
   
  
  render() {
    return(
    <div className="contactme" id="contact">
      <div className="contactOverlay">
        <div className="container">
          <div className="form2">
            <form className='form3' action="" onSubmit="">
              <div className="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input className="input100" type="text" name="fullName"   value={this.state.text} onChange={e => this.setState({ text : e.target.value })} required />
                <br />
                <span>Phone Number</span>
                <br />
                <input className="input100" type="text" name="phone" id='lname'  value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })}  required />
                <br />
                <span>Enter Email</span>
                <br />
                <input className="input100" id="subject" type="email" name="email"  value={this.state.email}  onChange={e => this.setState({ email: e.target.value })} required />
                <br />
              </div>
              <div className="formWord">
                <span>Message To Us : </span>
                <br />
                <textarea id='message' name="message"   onChange={e => this.setState({ message: e.target.value })}  value={this.state.message} required></textarea>
                <br />
                <button onClick={this.handlesubmit} >SUBMIT</button>

                <div className="row">All Done</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    ) 
  }
}

export default Contactus;
