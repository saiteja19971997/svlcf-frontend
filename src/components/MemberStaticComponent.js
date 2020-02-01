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
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import {EditMember} from '../routes/EditMember';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MemberDialog from '../components/MemberDialog.js'
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
          clickedcustomer :{

          },
          isopen : false,
            contentsOfHeader : ["login","Members","Groups","About"],
            groups:[],
            select: 1,
            name : "none",
            customers:[]
        }
      }
      setValueOnCancel=(response)=>{
        if(response!=null){
        this.setState({
          isopen:false,
          customers:response
        })
      }
      else{
        this.setState({
          isopen:false
        })
      }
      }
       handleClickOpen = (customer) => {
         console.log("in edit click");
        this.setState({isopen: true,
                         clickedcustomer:customer
        })
      };
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
        const isopen = this.state.isopen;
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
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">logo</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Group</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(customer => (
            <TableRow key={customer._id} hover="true" >
              <TableCell component="th" scope="row" align="center">
              <ListItemAvatar align="center">
                       <Avatar>
                         <AccountBoxRoundedIcon />
                      </Avatar>
                </ListItemAvatar>
              </TableCell>
              <TableCell align="right">{customer.name}</TableCell>
              <TableCell align="right">{customer.group}</TableCell>
              <TableCell align="right">{customer.phoneNumber}</TableCell>
              <TableCell align="right"><IconButton aria-label="edit" onClick={()=>this.handleClickOpen(customer)}>
             <EditIcon />
               </IconButton> 
               </TableCell>
               <TableCell align="left"><IconButton aria-label="delete" onClick={()=>this.deleteItem(customer)}>
                <DeleteIcon />
               </IconButton>   
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <MemberDialog open = {isopen} customer={this.state.clickedcustomer} setValueOnCancel={this.setValueOnCancel}/>
            </Fragment>
            )
    }
}
export default withStyles(styles)(MemberStaticComponent);