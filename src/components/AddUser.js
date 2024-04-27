import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function AddUser() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    fetchMaxUserId();
  }, []);

  const fetchMaxUserId = async () => {
    try {
      const response = await axios.get('http://localhost:2000/users');
      const users = response.data;
      const maxId = Math.max(...users.map(user => parseInt(user.id)));
      setUserData(prevState => ({
        ...prevState,
        id: (maxId >= 0 ? maxId : 0) + 1 // Increment the ID for the next user
      }));
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new user details
    axios.post('http://localhost:2000/users', userData)
      .then(() => {
        console.log('User details added successfully');
        navigate('/user-details'); // Redirect to UserDetails component after adding user
      })
      .catch(error => {
        console.error('Error adding user details:', error);
      });
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', backgroundColor: '#212529', padding: '10px', color: 'lightgray', marginBottom: '5px' }}>Add User</h2>
      <Form onSubmit={handleSubmit} style={{ margin: '20px' }}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" value={userData.username} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={userData.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={userData.password} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: '20px' }}>Add User</Button>
      </Form>
    </div>
  );
}

export default AddUser;
