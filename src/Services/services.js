import axios from 'axios';
const url='http://localhost:2000/users';

export const addUser = async (user) => {
    try {
      // Fetch the current list of users to get the last ID
      const response = await axios.get(url);
      const users = response.data;
  
      // Find the last ID and increment it for the new user
      const lastId = users.length > 0 ? parseInt(users[users.length - 1].id) : 0;
      const newUserId = (lastId + 1).toString();
  
      // Add the new user with the generated ID
      const newUser = { ...user, id: newUserId };
      await axios.post(url, newUser);
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  };

export const getUser=async()=>{
    return axios.get(url);
}

export const deleteUser=async(id)=>
{
    return axios.delete(`${url}/${id}`);
}

export const getUsersByid=async(id)=>{
    console.log("Id is "+id);
    id=id||'';
    return await axios.get(`${url}/${id}`);
}





























// export const editProduct=async(id,newproduct)=>
// {
//     return await axios.put(`${url}/${id}`,newproduct);
// }