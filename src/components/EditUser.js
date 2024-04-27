import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function EditUser() {
  const { id } = useParams(); // Get the user ID from URL parameters
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    // Fetch user details based on ID
    axios.get(`http://localhost:2000/users/${id}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user details
    axios.put(`http://localhost:2000/users/${id}`, userData)
      .then(() => {
        console.log('User details updated successfully');
        navigate('/user-details'); // Redirect to UserDetails component after update
      })
      .catch(error => {
        console.error('Error updating user details:', error);
      });
  };

  return (
    <div>
      <h2 style={{textAlign:'center', backgroundColor:'#212529', padding:'10px', color:'lightgray', marginBottom:'5px'}}>Edit User</h2>
      <Form onSubmit={handleSubmit}>
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
        <Button variant="primary" type="submit" style={{marginTop:'20px'}}>Update</Button>
      </Form>
    </div>
  );
}

export default EditUser;
