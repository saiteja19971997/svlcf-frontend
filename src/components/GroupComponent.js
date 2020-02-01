import React, {Component,Fragment} from 'react';
import HeaderComponent from '../components/HeaderComponent.js'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import '../css/App.css'
import GroupsList from '../routes/groupList.js';
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
import {EditGroup} from '../routes/EditGroup.js';
import GroupDialog from '../components/GroupDialog.js';
const styles = theme =>({
  root: {
    minWidth: 650,
  }
});
class GroupComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            clickedgroup :{

            },
            isopen : false,
            select:2,
            groups:[
              
            ]
        }
      }
      setValueOnCancel=(response)=>{
        if(response!=null){
        this.setState({
          isopen:false,
          groups:response
        })
      }
      else{
        this.setState({
          isopen:false
        })
      }
      }
       handleClickOpen = (group) => {
         console.log("in edit click");
        this.setState({isopen: true,
                         clickedgroup:group
        })
      };
      deleteItem = (group,event)=>{
           console.log(group);
           EditGroup(group,function(response){
             if(response !=null){
               this.setState({groups: response})
             }
           }.bind(this))
      }
      componentDidMount(){
        GroupsList(function(response){
              if(response !== null){
                  this.setState({groups: response});
              }
  
        }.bind(this));
      }
      render() 
      {
        const {classes} = this.props;
        const select = this.state.select;
        const groups = this.state.groups;
        const isopen = this.state.isopen;
        console.log(isopen);
      return (
          <Fragment>
               <HeaderComponent select = {select}/> 
              <Grid
                  container
                  direction="column"
                  justify="flex-start"
                 alignItems="center">
             <br />
           <Button variant="contained" color="primary" href="/creategroup">
               Create Group
          </Button>
          <br/>
           </Grid>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Group Name</TableCell>
            <TableCell align="right">start date</TableCell>
            <TableCell align="right">end date</TableCell>
            <TableCell align="right">chit value</TableCell>
            <TableCell align="right">installment</TableCell>
            <TableCell align="right">auction time</TableCell>
            <TableCell align="right">actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groups.map(group => (
            <TableRow key={group._id} hover="true" >
              <TableCell component="th" scope="row">
                {group.name}
              </TableCell>
              <TableCell align="right">{group.Start_date}</TableCell>
              <TableCell align="right">{group.End_date}</TableCell>
              <TableCell align="right">{group.chit_value}</TableCell>
              <TableCell align="right">{group.Installment_amount}</TableCell>
              <TableCell align="right">{group.Action_time}</TableCell>
              <TableCell align="right"><IconButton aria-label="edit" onClick={()=>this.handleClickOpen(group)}>
             <EditIcon />
               </IconButton> 
               </TableCell>
               <TableCell align="left"><IconButton aria-label="delete" onClick={()=>this.deleteItem(group)}>
                <DeleteIcon />
               </IconButton>   
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <GroupDialog open = {isopen} group={this.state.clickedgroup} setValueOnCancel={this.setValueOnCancel}/>
              </Fragment>)
    }
}
export default withStyles(styles)(GroupComponent);