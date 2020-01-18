import { withRouter } from 'react-router-dom';
import React, {Component} from 'react'; 
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class HeaderComponent extends Component{
    constructor({select}){
        super({select})
        this.state = {
            conentsOfHeader : ["login","Members","Groups","About"],
            selected : select
        }
      }
       handleChange = (event, newValue ) =>{
        this.setState({
             selected : newValue

        });
        if (this.state.conentsOfHeader[newValue]==="Members"){
            this.props.history.push('/members');
        }
        if (this.state.conentsOfHeader[newValue]==="Groups"){
            this.props.history.push('/groups');
        }
    }
    render(){
        const contents = this.state.conentsOfHeader;
        const select = this.state.selected;
        return(
            <Paper>
               <Tabs
                   value={select}
                   indicatorColor="primary"
                   onChange={this.handleChange}
                   textColor="primary"
                  centered
      >
          {
              contents.map( item => <Tab label = {item} /> )
          }
      </Tabs>
    </Paper>
        );
    }
}

export default withRouter(HeaderComponent);