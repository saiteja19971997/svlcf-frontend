import React, { Component } from 'react'
import axios from 'axios'

class MemberComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            customers:[]
        }
    }
  componentDidMount(){
      axios.get('http://localhost:3002/members/A20')
      .then(response => {
          console.log(response);
          this.setState({customers: response.data.customers});
      })
      .catch(error => {
          console.log(error);
      });
  }
  render(){
      //const {customers} = this.state;
      return (
          <div>
             {
                this.state.customers.length ?
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
