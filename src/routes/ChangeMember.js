import axios from 'axios';

export const ChangeMember = (obj,customer,callback) => {
  console.log(customer);
  console.log(obj);
  for ( var key in customer){
    if(key==="_id")
    {
       obj[key]=customer[key]
    }
    else{
    if(obj[key]===''){
      obj[key]=customer[key]
    }
  }
  }
  console.log(obj);
    axios.post('http://localhost:3002/members/edit',obj)
      .then(response => {
          console.log(response);
          callback(response.data.customers);
      })
      .catch(error => {
        callback(null);
          console.log(error);
      });
}

export default ChangeMember;




