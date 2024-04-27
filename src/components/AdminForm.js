import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminForm() {
  const navigate = useNavigate();
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5050/admin');
      const adminDetails = response.data;
      if (adminDetails && adminDetails.length > 0) {
        const admin = adminDetails.find(admin => (admin.username === usernameOrEmail || admin.email === usernameOrEmail));
        if (admin && admin.password === password) {
          localStorage.setItem('isAdmin', 'true'); // Set authentication token indicating admin
            navigate('/admin-dashboard');
        } else {
          setError('Invalid username or password');
        }
      } else {
        setError('Admin details not found');
      }
    } catch (error) {
      console.error('Error fetching admin details:', error);
      setError('An error occurred. Please try again.');
    }
  }

  return (
    <div>
      <h2 style={{textAlign:'center', marginTop:'20px'}}>Admin Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Form onSubmit={handleLogin} style={{margin:'20px'}}>

        <Form.Group>
          <Form.Label>Admin username/email:</Form.Label>
          <Form.Control type="text" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Admin password:</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button type="submit" style={{marginTop:'20px'}}>Admin Login</Button>
      </Form>
    </div>
  );
}

export default AdminForm;
