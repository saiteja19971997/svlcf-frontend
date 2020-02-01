import axios from 'axios';
export const CreateMember = (obj,callback) =>{
    axios.post('http://localhost:3002/members/createmember', obj)
   .then(response => {
     callback(response.data);
   })
   .catch(error => {
      console.log(error);
      callback(null);
   });
   }