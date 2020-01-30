import React, { Component, Fragment } from 'react'
import{ MembersList } from '../routes/membersList.js';

class MemberComponent extends Component {
    constructor({groupId}){
        super({groupId})
    this.state = {
        group:groupId,
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
      const customers = this.state.customers;
      console.log(this.state.group);
      return (
          <Fragment>
             {
                this.state.group ==="none" ? <div>no members</div>
                  :
                 customers.map( customer => <div key={customer._id}>
                    {customer.name}  {customer.group}  {customer.phoneNumber} 
                    <a href="url">edit</a>
                    <a href="url">delete</a>
               </div>)
             }
          </Fragment>

          );
  }
}

export default MemberComponent;
