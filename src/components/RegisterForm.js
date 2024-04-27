import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addUser } from "../Services/services";
import { Link } from "react-router-dom";

function RegisterForm() {
    const navigate = useNavigate();
    const [users, setUsers] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleData = (event) => {
        const { name, value } = event.target;
        setUsers((prevData) => ({
            ...prevData, [name]: value
        }));
    }

    const saveProduct = async (event) => {
        event.preventDefault();
        let userResponse = prompt('Do you want to proceed to add this data to the json. (yes/no)');
        if (userResponse === 'yes') {
            // Get the current timestamp to use as the ID
            const id = Date.now().toString();
            // Create the new user object with the incremented ID
            const newUser = {
                id,
                username: users.username,
                email: users.email,
                password: users.password
            };
            // Add the new user to the JSON server
            await addUser(newUser);
            alert("Users details added to the json file")
            navigate("/");
        } else {
            alert("Please fill the details again!!");
        }
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Please Register Here</h2>
            <Form onSubmit={saveProduct} style={{ margin: '20px' }}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="username" className="label-text-bold">Username:</Form.Label>
                    <Form.Control type="text" name="username" id="username" value={users.username} onChange={handleData} placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="email" className="label-text-bold">Email:</Form.Label>
                    <Form.Control type="text" name="email" id="email" value={users.email} onChange={handleData} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="password" className="label-text-bold">Password:</Form.Label>
                    <Form.Control type="password" name="password" id="password" value={users.password} onChange={handleData} placeholder="Enter Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register Here
                </Button>

                <h4>Already a user? Click <Link to='/'>Login</Link></h4>
            </Form>
        </div>
    );
}

export default RegisterForm;
