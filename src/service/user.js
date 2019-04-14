import request from '../util/request'; 

const domain = "https://www.cityhouses.net";

export function getUsers() {
  return request(`${domain}/demo/getusers`);
}

export function saveUser(params) {
  return request(`${domain}/demo/saveuser`, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    data: params,
  });
}

export function removeUser(id) {
  return request(`${domain}/demo/removeuser/${id}`);
}

export async function showIP(){
  return request(`${domain}/api/showip`,{
      method: 'POST',  
      headers:{
        token: "1234"
      }
    }
  ); 
}
