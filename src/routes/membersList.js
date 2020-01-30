import axios from 'axios';

export const MembersList = (id,callback) => {
  console.log(id);
    axios.get('http://localhost:3002/members/'+id)
      .then(response => {
          console.log(response);
          callback(response.data.customers);
      })
      .catch(error => {
        callback(null);
          console.log(error);
      });
}




