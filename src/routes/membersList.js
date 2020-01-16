import axios from 'axios';

export const MembersList = (callback) => {
    axios.get('http://localhost:3002/members/A20')
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




