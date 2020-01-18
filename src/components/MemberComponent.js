import React, { Component, Fragment } from 'react'
import axios from 'axios'
import{ MembersList } from '../routes/membersList.js';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import HeaderComponent from '../components/HeaderComponent.js'
class MemberComponent extends Component {
    constructor(props){
        super(props)
    this.state = {
        select : 1,
        customers:[]
    }

}
  /*componentDidMount(){
      MembersList(function(response){
            if(response !== null){
                this.setState({customers: response});
                console.log(JSON.stringify( this.state.customers ));
            }

      }.bind(this));
  }*/

  render(){
      const customers = this.state.customers;
      const select = this.state.select;
      return (
          <Fragment>
              <HeaderComponent select = {select}/>
             {
                customers.length > 0 ?
                customers.map( customer => <div key={customer._id}>
                         {customer.name}  {customer.group}  {customer.phoneNumber} 
                         <a href="url">edit</a>
                         <a href="url">delete</a>
                    </div> ) :
                    <div><h1>no members in the group</h1></div>
             }
          </Fragment>
          /*<Fragment>
              <Grid item sm>
                <Paper>
                    
                </Paper>
              </Grid>
          </Fragment>*/
          );
  }
}

export default MemberComponent;
