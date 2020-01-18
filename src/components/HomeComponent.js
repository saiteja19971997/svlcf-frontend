import React, {Component} from 'react'; 
import '../css/App.css';
import HeaderComponent from '../components/HeaderComponent.js'

class HomeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
        
        }
      }
      
      render() 
      {
          return(<div>
              <HeaderComponent />
          </div>)
      }
}

export default HomeComponent;