import React, {Component, Fragment} from 'react'; 
import { withRouter } from 'react-router-dom';
import { CreateGroup } from '../routes/CreateGroup.js';
import '../css/App.css';
import HeaderComponent from './HeaderComponent.js';

class CreateGroupComponent extends Component { 
    constructor(props){
      super(props)
      this.state = {
        name:"",
        Start_date:"",
        End_date:"",
        chit_value:"",
        Installment_amount:"",
        Action_time:""
      }
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      });
    }

    handleSubmit = (e) =>{
     const obj = this.state;
      CreateGroup(obj, function (response){
        if(response!=null){
          console.log(response);
          this.props.history.push('/createmember');
        }
      }.bind(this));
     }
    render() 
    {
      const {name,Start_date,End_date,chit_value,Installment_amount,Action_time } = this.state; 
        return (
          <Fragment>
            <HeaderComponent select={2}/>
          <div className="wrapper">
    <div className="form-wrapper">
      <h1>Create Group</h1>
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
          <label>Start Date</label>
          <input
            name="Start_date"
            type="text"
            className=""
            placeholder="Start Date"
            value={Start_date}
            onChange={this.handleChange}
          />
        </div>
        <div className="email">
          <label>End Date</label>
          <input
            name="End_date"
            type="text"
            className=""
            placeholder="End Date"
            value={End_date}
            onChange={this.handleChange}
          />
        </div>
        <div className="email">
          <label>Chit Value</label>
          <input
            name="chit_value"
            type="text"
            className=""
            placeholder="Chit Value"
            value={chit_value}
            onChange={this.handleChange}
          />
        </div>
        <div className="email">
          <label>Installment Amount</label>
          <input
            name="Installment_amount"
            type="text"
            className=""
            placeholder="Installment Amount"
            value={Installment_amount}
            onChange={this.handleChange}
          />
          <div className="email">
          <label>Action Time</label>
          <input
            name="Action_time"
            type="text"
            className=""
            placeholder="Action Time"
            value={Action_time}
            onChange={this.handleChange}
          />
        </div>
        </div>
        <div className="login">
            <button type="submit">Create Group</button>
          </div>
      </form>
    </div>
    </div>
    </Fragment>
        ); 
  } 
}   
  
// Exporting the component 
export default withRouter(CreateGroupComponent); 