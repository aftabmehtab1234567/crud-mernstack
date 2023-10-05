import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { edituser,  getusers } from './services/api'; // Import getuser
import { useNavigate, useParams } from 'react-router-dom'; // Corrected import

const Container = styled(FormGroup)`
  width: 50%;
  margin: auto;
`;

const Edituser = () => {
  // Create a state object to store user information
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { id } = useParams(); // Get the user's ID from the URL params

  useEffect(() => {
    loaduserdetail();
  }, []);

  const loaduserdetail = async () => {
    try {
      const response = await getusers(id);
      const userData = response.data.user; // Access the 'user' property
      
      setUser({
        ...userData, // Spread the properties from 'userData' into 'user'
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  // Handle input changes and update the user state
  const onValueChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Function to handle editing a user
  const editAllUser = async (user) => {
    try {
   
      // You can access the edited user data in the 'user' state object
      await edituser(user);
     
      navigate('/Alluser');
    } catch (error) {
      console.error('Error editing user:', error);
      // Handle the error here or display an error message to the user
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h2">
        Edit User
      </Typography>

      <FormControl>
        <InputLabel htmlFor="firstname">First Name</InputLabel>
        <Input
          id="firstname"
          aria-describedby="my-helper-text"
          onChange={onValueChange}
          name="firstname"
          value={user.firstname}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="lastname">Last Name</InputLabel>
        <Input
          id="lastname"
          aria-describedby="my-helper-text"
          onChange={onValueChange}
          name="lastname"
          value={user.lastname}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          aria-describedby="my-helper-text"
          onChange={onValueChange}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          aria-describedby="my-helper-text"
          onChange={onValueChange}
          name="password"
          value={user.password}
        />
      </FormControl>
      <FormControl>
      <Button variant="contained" onClick={() => editAllUser(user)}>
  Edit user
</Button>

      </FormControl>
     
    </Container>
  

  );
};

export default Edituser;
