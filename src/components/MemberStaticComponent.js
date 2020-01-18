import React, {Component} from 'react';
import HeaderComponent from '../components/HeaderComponent'
class MemberStaticComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            contentsOfHeader : ["login","Members","Groups","About"]
        }
      }
      
      render() 
      {
        const contents = this.state.contentsOfHeader;
        return (<div>
            <HeaderComponent 
              contents = {contents}/>
              <h1>/members</h1>
            </div>)
    }
}
export default MemberStaticComponent;