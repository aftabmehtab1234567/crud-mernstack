import axios from 'axios';

const URL = " http://localhost:9000"; // Replace with your actual API URL

export const adduser = async (data) => {

  try {
    const response = await axios.post(`${URL}/add`, data);
    return response.data;
  } catch (error) {
    console.error('Error while calling API:', error);
    throw error;
  }
};
export const getuser = async () => {
  try {
    return await axios.get(`${URL}/all`);
   
  } catch (error) {
    console.error('Error while calling get user API:', error);
    throw error; // Re-throw the error to handle it elsewhere, if needed
  }
};
export const getusers = async (id) => {
  try {
    // This line should log 'getusers', not undefined.
    return axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log('Error while calling getusers API', error); // Use 'error' instead of 'e' to log the error.
  }
};
export const edituser = async (user) => {
  
  try {
    // Make a PUT request to update the user with the given ID
    const response = await axios.put(`${URL}/edit/${user._id}`, user);
    
    return response.data; // Return the updated user data
  } catch (error) {
    console.error('Error while editing user:', error);
    throw error; // Re-throw the error to handle it elsewhere, if needed
  }
};
export const deleteuser = async (id) => {
  try {
    // Make a DELETE request to delete the user with the given ID
    const response = await axios.delete(`${URL}/${id}`);
    
    // Check if the deletion was successful based on the response status code
    if (response.status === 204) {
      console.log('User deleted successfully');
    } else {
      console.error('Error deleting user:', response.status);
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error; // Re-throw the error to handle it elsewhere, if needed
  }
}
