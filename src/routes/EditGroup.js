import axios from 'axios';

export const EditGroup = (group,callback) => {
    axios.post('http://localhost:3002/groups/',group)
      .then(response => {
          console.log(response);
          callback(response.data.customers);
      })
      .catch(error => {
        callback(null);
          console.log(error);
      });
  
}

export default EditGroup;
