import React, {Component, Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {ChangeGroup} from '../routes/ChangeGroup.js';
class GroupDialog extends Component {
    constructor(props){
        super(props)
        this.state = {
          _id:"",
          name: "",
          Start_date: "",
          End_date:"",
          chit_value:"",
          Installment_amount:"",
          Action_time:""
        };
        this.handleChange = this.handleChange.bind(this);
      }

      handleSubmit = (e) =>  {
        e.preventDefault();
        const obj = this.state;
        ChangeGroup(obj,this.props.group,function(response){
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
        
          const group=this.props.group;
          const select=this.props.open;
         // const {name,Start_date,End_date,chit_value,Installment_amount,Action_time } = group; 
         const name = this.props.group.name
         const Start_date=this.props.group.Start_date
         const End_date=this.props.group.End_date
         const chit_value=this.props.group.chit_value
         const Installment_amount=this.props.group.Installment_amount
         const Action_time=this.props.group.Action_time
          console.log(select);
          console.log(group);
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
          <div className="email"><TextField required id="standard-required" name ="Start_date" label="Required" defaultValue={Start_date} onChange={this.handleChange}/></div>
          <div className="email"><TextField required id="standard-required" name = "End_date" label="Required" defaultValue={End_date} onChange={this.handleChange}/></div>
          <div className="email"><TextField required id="standard-required" name = "chit_value" label="Required" defaultValue={chit_value} onChange={this.handleChange}/></div>
          <div className="email"><TextField required id="standard-required" name="Installment_amount" label="Required" defaultValue={Installment_amount} onChange={this.handleChange}/></div>
          <div className="email"><TextField required id="standard-required" name= "Action_time" label="Required" defaultValue={Action_time} onChange={this.handleChange}/></div>
        <div className="login">
            <button type="submit">Edit Group</button>
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
export default GroupDialog;