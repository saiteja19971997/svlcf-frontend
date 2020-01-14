import React, {Component} from 'react'; 
import '../css/App.css';
import axios from 'axios';
import MemberComponent from '../components/MemberComponent.js'
class HomeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
        
        }
      }
      render() 
      {
          return(<div>
              <MemberComponent />
          </div>)
      }
}

export default HomeComponent;