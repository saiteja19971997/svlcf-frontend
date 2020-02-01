import React, {Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class SelectExample extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "A30",
            groups: [
                {
                    "_id": "5e15e0332c038828c4cb1405",
                    "name": "A20"
                },
                {
                    "_id": "5e26fcaf6e326181d896d7d7",
                    "name": "c4"
                },
                {
                    "_id": "5e2c14f8259cc50c84949867",
                    "name": "c7"
                },
                {
                    "_id": "5e15e0332c038828c4cb1405",
                    "name": "A20"
                },
                {
                    "_id": "5e26fcaf6e326181d896d7d7",
                    "name": "c4"
                },
                {
                    "_id": "5e2c14f8259cc50c84949867",
                    "name": "c7"
                },
                {
                    "_id": "5e15e0332c038828c4cb1405",
                    "name": "A20"
                },
                {
                    "_id": "5e26fcaf6e326181d896d7d7",
                    "name": "c4"
                },
                {
                    "_id": "5e2c14f8259cc50c84949867",
                    "name": "c7"
                },
                {
                    "_id": "5e15e0332c038828c4cb1405",
                    "name": "A20"
                },
                {
                    "_id": "5e26fcaf6e326181d896d7d7",
                    "name": "c4"
                },
                {
                    "_id": "5e2c14f8259cc50c84949867",
                    "name": "c7"
                },{
                    "_id": "5e15e0332c038828c4cb1405",
                    "name": "A20"
                },
                {
                    "_id": "5e26fcaf6e326181d896d7d7",
                    "name": "c4"
                },
                {
                    "_id": "5e2c14f8259cc50c84949867",
                    "name": "c7"
                },
                {
                    "_id": "5e15e0332c038828c4cb1405",
                    "name": "A20"
                },
                {
                    "_id": "5e26fcaf6e326181d896d7d7",
                    "name": "c4"
                },
                {
                    "_id": "5e2c14f8259cc50c84949867",
                    "name": "c7"
                },
                {
                    "_id": "5e15e0332c038828c4cb1405",
                    "name": "A20"
                },
                {
                    "_id": "5e26fcaf6e326181d896d7d7",
                    "name": "c4"
                },
                {
                    "_id": "5e2c14f8259cc50c84949867",
                    "name": "c7"
                },
                {
                    "_id": "5e15e0332c038828c4cb1405",
                    "name": "A20"
                },
                {
                    "_id": "5e26fcaf6e326181d896d7d7",
                    "name": "c4"
                },
                {
                    "_id": "5e2c14f8259cc50c84949867",
                    "name": "c7"
                },
                {
                    "_id": "5e15e0332c038828c4cb1405",
                    "name": "A20"
                },
                {
                    "_id": "5e26fcaf6e326181d896d7d7",
                    "name": "c4"
                },
                {
                    "_id": "5e2c14f8259cc50c84949867",
                    "name": "c7"
                }

            ]
        }
      }
      
       handleChange = event => {
        this.setState({
            age:event.target.value
        })
      };
      render() 
      {
       const age = this.state.age;
       const groups = this.state.groups;
        return (<div>
               <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={this.handleChange}
        >
          {
          groups.map( group => 
             <MenuItem key= {group.name} value = {group.name}>{group.name}</MenuItem>
          )
        }
        </Select>
            </div>)
    }
}
export default SelectExample;