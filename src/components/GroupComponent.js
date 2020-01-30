import React, {Component,Fragment} from 'react';
import HeaderComponent from '../components/HeaderComponent.js'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/styles';
import '../css/App.css'
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import GroupsList from '../routes/groupList.js'
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'lightblue',
    alignItems:"center"
  },
item:{
  
}})
class GroupComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            select:2,
            groups:[
              
            ]
        }
      }
      deleteItem = (group,event)=>{
           console.log(group);
      }
      componentDidMount(){
        GroupsList(function(response){
              if(response !== null){
                  this.setState({groups: response});
                  console.log(JSON.stringify( this.state.groups ));
              }
  
        }.bind(this));
      }
      render() 
      {
        const {classes} = this.props;
        const select = this.state.select;
        const groups = this.state.groups;
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
           <div className={classes.root}>
           <List>
             {
               groups.map( group => 
               <div>
                <ListItem key={group._id}>
                 <ListItemAvatar>
                       <Avatar>
                         <AccountBoxRoundedIcon />
                      </Avatar>
                </ListItemAvatar>
                 <ListItemText primary ={group.name} /> 
                 <ListItemText primary ={group.Start_date} />
                 <ListItemText primary ={group.End_date} />
                 <ListItemText primary ={group.chit_value} />
                 <ListItemText primary ={group.Installment_amount} /> 
                 <ListItemText primary ={group.Action_time} />
                 <ListItemAvatar>
                       <Avatar>
                         <EditRoundedIcon />
                      </Avatar>
                </ListItemAvatar>
                <Button variant="contained" onChange={this.deleteItem(group)}>Delete</Button>
               </ListItem>
               <Divider />
               </div>
               )
             } 
    </List>
    </div>
              </Fragment>)
    }
}
export default withStyles(styles)(GroupComponent);