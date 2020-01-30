import React, {Component, Fragment} from 'react';
import HeaderComponent from'../components/HeaderComponent.js';
class AboutComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            select:0
        }
      }
      
      render() 
      {
       const select = this.state.select;
        return (<Fragment>
          <HeaderComponent select={3}/>
          </Fragment>)
    }
}
export default AboutComponent;