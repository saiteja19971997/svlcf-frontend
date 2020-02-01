import React, {Component, Fragment} from 'react'; 
import { withRouter } from 'react-router-dom';
import { CreateMember } from '../routes/CreateMember.js';
import '../css/App.css';
import HeaderComponent from './HeaderComponent.js'
class CreateMemberComponent extends Component { 
    constructor(props){
      super(props)
      this.state = {
        name:"",
        group:"",
        phoneNumber:""
      }
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      });
    }

    handleSubmit = (e) =>{
     const obj = this.state;
      CreateMember(obj, function (response){
        if(response!=null){
          console.log(response);
          this.props.history.push('/createmember');
        }
      }.bind(this));
     }
    render() 
    {
      const {name,group,phoneNumber } = this.state; 
        return (
          <Fragment>
            <HeaderComponent select={1}/>
          <div className="wrapper">
    <div className="form-wrapper">
      <h1>Create Member</h1>
      <form onSubmit={this.handleSubmit}>
      <div className="email">
          <label>Name</label>
          <input
            name = "name"
            type="text"
            className=""
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
      <div className="email">
          <label>Group</label>
          <input
            name="group"
            type="text"
            className=""
            placeholder="Group Id"
            value={group}
            onChange={this.handleChange}
          />
        </div>
        <div className="email">
          <label>Phone</label>
          <input
            name="phoneNumber"
            type="text"
            className=""
            placeholder="Phone"
            value={phoneNumber}
            onChange={this.handleChange}
          />
        </div>
        <div className="login">
            <button type="submit">Create Member</button>
          </div>
      </form>
    </div>
    </div>
    </Fragment>
        ); 
  } 
}   
  
// Exporting the component 
export default withRouter(CreateMemberComponent); 