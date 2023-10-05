import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell, Button } from '@mui/material';
import { getuser,deleteuser } from './services/api';
import { Link } from 'react-router-dom';

const Alluser = () => {
  const [userData, setUserData] = useState([]);

  // Declare the getAlluser function
  const getAlluser = async () => {
    try {
      const response = await getuser();
      setUserData(response.data.users);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    // Call the getAlluser function when the component mounts
    getAlluser();
  }, []); // Empty dependency array means this effect runs once after component mount
  const deleteUser = async (id) => {
    try {
      // Call the delete function to delete a user
      const response = await deleteuser(id);
      window.location.reload();
      // Handle the response or perform other actions as needed
      console.log('User deleted successfully:', response);
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle the error or display an error message to the user
    }
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Password</TableCell>
          <TableCell>Actions</TableCell> {/* Add a new column for actions */}
        </TableRow>
      </TableHead>
      <TableBody>
        {userData.map((user) => (
          <TableRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.firstname}</TableCell>
            <TableCell>{user.lastname}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 16 }}
                component={Link}
                to={`/edit/${user._id}`} // Fixed the URL path
              >
                Edit
              </Button>
              <Button variant="contained" color="secondary" onClick={()=> deleteUser(user._id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    
  );
};

export default Alluser;
