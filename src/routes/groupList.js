import axios from 'axios';

 const GroupsList = (callback) => {
    axios.get('http://localhost:3002/groups')
      .then(response => {
          console.log(response);
          callback(response.data.customers);
      })
      .catch(error => {
        callback(null);
          console.log(error);
      });
}
 export default GroupsList;



