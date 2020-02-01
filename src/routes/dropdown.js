import axios from 'axios';

export const dropdown = (callback) => {
    axios.get('http://localhost:3002/groups/groupIds')
      .then(response => {
          console.log(response);
          //this.setState({customers: response.data.customers});
          callback(response.data.customers);
      })
      .catch(error => {
        callback(null);
          console.log(error);
      });
}

export default dropdown;




