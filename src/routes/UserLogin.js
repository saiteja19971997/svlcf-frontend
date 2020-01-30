import axios from 'axios';

export const UserLogin = (obj,callback) =>{
 axios.post('http://localhost:3002/user/login', obj)
.then(response => {
  callback(response.data);
})
.catch(error => {
   console.log(error);
   callback(null);
});
}


