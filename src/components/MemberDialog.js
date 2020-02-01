import React, {Component, Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {ChangeMember} from '../routes/ChangeMember.js';
class MemberDialog extends Component {
    constructor(props){
        super(props)
        this.state = {
          _id:"",
          name: "",
          group: "",
          phoneNumber:""
        };
        this.handleChange = this.handleChange.bind(this);
      }

      handleSubmit = (e) =>  {
        e.preventDefault();
        console.log("into submit")
        const obj = this.state;
        console.log(obj);
        ChangeMember(obj,this.props.customer,function(response){
           if(response!=null){
             this.props.setValueOnCancel(response);
           }
        }.bind(this))
      }
      handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
          [e.target.name] : e.target.value
        });
       }
       handleClose = () => {
         console.log("into close");
                 this.props.setValueOnCancel(null); 
       };
      render() 
      {
        
          const select=this.props.open;
         // const {name,Start_date,End_date,chit_value,Installment_amount,Action_time } = group; 
         const name = this.props.customer.name
         const group=this.props.customer.group
         const phoneNumber=this.props.customer.phoneNumber
        return (<Fragment>
          <Dialog open={select} 
          onClose={()=>this.handleClose()}
            aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Group</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter new details
          </DialogContentText>
          <form onSubmit={this.handleSubmit}>
          <div className="email"><TextField required id="standard-required" name = "name" label="Required" defaultValue={name} onChange={this.handleChange}/></div>
          <div className="email"><TextField required id="standard-required" name ="group" label="Required" defaultValue={group} onChange={this.handleChange}/></div>
          <div className="email"><TextField required id="standard-required" name = "phoneNumber" label="Required" defaultValue={phoneNumber} onChange={this.handleChange}/></div>
        <div className="login">
            <button type="submit">Edit Member</button>
          </div>
      </form>
        </DialogContent> 
        <DialogActions>
          <Button onClick={()=>this.handleClose()} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
          </Fragment>)
    }
}
export default MemberDialog;