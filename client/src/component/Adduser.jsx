import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { adduser } from './services/api';
import { useNavigate } from 'react-router-dom'; // Corrected import

const Container = styled(FormGroup)`
  width: 50%;
  margin: auto;
`;

const Adduser = () => {
  // Create a state object to store user information
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle input changes and update the user state
  const onValueChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Function to handle adding a user
  const addUser = async () => {
    try {
      // You can access the user data in the 'user' state object
      await adduser(user);
      navigate('/Alluser');
    } catch (error) {
      console.error('Error adding user:', error);
      // Handle the error here or display an error message to the user
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h2">
        Sign Up
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
        <Button variant="contained" onClick={addUser}>
          Add user
        </Button>
      </FormControl>
    </Container>
  );
};

export default Adduser;
