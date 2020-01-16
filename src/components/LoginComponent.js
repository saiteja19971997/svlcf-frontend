import React, {Component} from 'react'; 
import { withRouter } from 'react-router-dom';
import { UserLogin } from '../routes/UserLogin.js'
import '../css/App.css';
import axios from 'axios';
class LoginComponent extends Component { 
 
    constructor(props){
      super(props)
      this.state = {
        email: "",
        password: ""
      }
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    handleSubmit = (e) =>{
      e.preventDefault();
     const obj = this.state;
      UserLogin(obj, function (response){
        if(response!=null){
          console.log(response);
          this.props.history.push('/home');
        }
      }.bind(this));
     }
    render() 
    {
      const {email, password } = this.state; 
        return (
          <div className="wrapper">
    <div className="form-wrapper">
      <h1>Login in Account</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="email">
          <label>E-mail</label>
          <input
            name = "email"
            type="text"
            className=""
            placeholder="E-mail ID"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className="password">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className=""
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div className="login">
            <button type="submit">Create Account</button>
            <small>Already Have an Account?</small>
          </div>
      </form>
    </div>
    </div>
        ); 
  } 
}   
  
// Exporting the component 
export default withRouter(LoginComponent); 