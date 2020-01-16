import React, { Component } from 'react'
import axios from 'axios'
import{ MembersList } from '../routes/membersList.js';

class MemberComponent extends Component {
    constructor(props){
        super(props)
    this.state = {
        customers:[]
    }

}
  componentDidMount(){
      MembersList(function(response){
            if(response !== null){
                this.setState({customers: response});
                console.log(JSON.stringify( this.state.customers ));
            }

      }.bind(this));
  }

  render(){
      return (
          <div>
             {
                this.state.customers.length > 0 ?
                this.state.customers.map( customer => <div key={customer._id}>
                         {customer.name}  {customer.group}  {customer.phoneNumber} 
                         <a href="url">edit</a>
                         <a href="url">delete</a>
                    </div> ) :
                    <div><h1>no members in the group</h1></div>
             }
          </div>
          );
  }
}

export default MemberComponent;
