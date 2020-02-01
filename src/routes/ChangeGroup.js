import axios from 'axios';

export const ChangeGroup = (obj,group,callback) => {
  console.log(group);
  console.log(obj);
  for ( var key in group){
    if(key==="_id")
    {
       obj[key]=group[key]
    }
    else{
    if(obj[key]===''){
      obj[key]=group[key]
    }
  }
  }
  console.log(obj);
    axios.post('http://localhost:3002/groups/edit',obj)
      .then(response => {
          console.log(response);
          callback(response.data.customers);
      })
      .catch(error => {
        callback(null);
          console.log(error);
      });
}

export default ChangeGroup;




