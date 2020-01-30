import React, {Component, Fragment} from 'react';
import HeaderComponent from '../components/HeaderComponent'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import '../css/App.css'
import Grid from '@material-ui/core/Grid';
import{ dropdown } from '../routes/dropdown.js';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/styles';
import {MembersList} from '../routes/membersList.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import {EditMember} from '../routes/EditMember';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'lightblue',
    alignItems:"center"
  }});
class MemberStaticComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            contentsOfHeader : ["login","Members","Groups","About"],
            groups:[],
            select: 1,
            name : "none",
            customers:[]
        }
      }
      deleteItem = (customer,event) => {
        EditMember(customer,function(response){
          console.log(response);
          if(response !== null){
            this.setState({customers: response});
        }
        }.bind(this));
    }
         handleChange=event=> {
          this.setState({
            name:event.target.value
        });
        MembersList(event.target.value,function(response){
          if(response !== null){
              this.setState({customers: response});
          }

    }.bind(this));

        }
       componentDidMount(){
      dropdown(function(response){
            if(response !== null){
                this.setState({groups: response});
            }

      }.bind(this));
  }
      render() 
      {
        const name = this.state.name;
        const groups = this.state.groups;
        const select = this.state.select;
        const customers=this.state.customers;
        const {classes} = this.props;
        return (<Fragment>
            <HeaderComponent 
              select = {select}/>
              <br />
              <br />
              <Grid
                   container
                      direction="column"
                      justify="flex-start"
                      alignItems="center"
              >
 <Button variant="contained" color="primary" href="/createmember">
          Create Member
</Button>
<br />
<br />
        <InputLabel id="demo-simple-select-label">select Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          onClick={this.handleChange}
        >
          {
          groups.map( group => 
             <MenuItem key= {group.name} value = {group.name}>{group.name}</MenuItem>
          )
        }
        </Select>
        
      </ Grid>
          <div className={classes.root}>
           <List>
             {
               customers.length ?
               customers.map( customer => 
               <div>
                <ListItem key={customer._id}>
                 <ListItemAvatar>
                       <Avatar>
                         <AccountBoxRoundedIcon />
                      </Avatar>
                </ListItemAvatar>
                 <ListItemText primary ={customer.name} /> 
                 <ListItemText primary ={customer.group} />
                 <ListItemText primary ={customer.phoneNumber} />
                 <ListItemAvatar>
                 <Button variant="contained">Edit</Button>
                </ListItemAvatar>
                <ListItemAvatar>
                <Button variant="contained" onClick={()=>this.deleteItem(customer)}>Delete</Button>
                </ListItemAvatar> 
               </ListItem>
               <Divider />
               </div>
               ):<div><h3>please select group</h3></div>
             } 
    </List>
    </div>
            </Fragment>
            )
    }
}
export default withStyles(styles)(MemberStaticComponent);