import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled('p')`
  font-size: 20px;
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Link to="/codeforinterview" style={{ textDecoration: 'none', color: 'white' }}>
          <Tabs>Code for interview</Tabs>
        </Link>
        <Link to="/alluser" style={{ textDecoration: 'none', color: 'white' }}>
          <Tabs>All User</Tabs>
        </Link>
        <Link to="/adduser" style={{ textDecoration: 'none', color: 'white' }}>
          <Tabs>Signup</Tabs>
        </Link>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
