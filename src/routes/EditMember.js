import axios from 'axios';

export const EditMember = (customer,callback) => {
    axios.post('http://localhost:3002/members/',customer)
      .then(response => {
          console.log(response);
          callback(response.data.customers);
      })
      .catch(error => {
        callback(null);
          console.log(error);
      });
  
}

export default EditMember;
