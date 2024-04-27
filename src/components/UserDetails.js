import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserDetails() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('http://localhost:2000/users');
      setUserDetails(response.data || []);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:2000/users/${userId}`);
      // Update the user details state without the deleted user
      const updatedUsers = userDetails.filter(user => user.id !== userId);
      setUserDetails(updatedUsers);
      // Resequence IDs
      resequenceIds(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const resequenceIds = (users) => {
    const updatedUsers = users.map((user, index) => ({
      ...user,
      id: index + 1
    }));
    setUserDetails(updatedUsers);
  };

  return (
    <>
      <h2 style={{ textAlign: 'center', backgroundColor: '#212529', padding: '10px', color: 'lightgray', marginBottom: '5px' }}>User Details</h2>
      <div style={{ margin: '20px' }}>
        <Link to="/add-user">
          <Button variant="primary">
            <Link to="/add-user" style={{ color: 'white', textDecoration: 'none' }}>Click to add new user</Link>
          </Button>
        </Link>
        <Table style={{ border: '1px solid black', width: '100%', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email ? user.email : '-'}</td>
                <td>{user.password}</td>
                <td>
                  <Link to={`/edit-user/${user.id}`}>
                    <Button variant="info">Edit</Button>
                  </Link>
                  <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link to={`/admin-dashboard`} style={{ color: 'white', textDecoration: 'none', border: '1px solid white', backgroundColor: 'teal', borderRadius: '10px', padding: '5px 5px' }}>--Go to Admin-Dashboard</Link>
      </div>
    </>
  );
}

export default UserDetails;
