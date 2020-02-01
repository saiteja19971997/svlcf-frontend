import axios from 'axios';
export const CreateGroup = (obj,callback) =>{
    axios.post('http://localhost:3002/groups/creategroup', obj)
   .then(response => {
     callback(response.data);
   })
   .catch(error => {
      console.log(error);
      callback(null);
   });
   }