import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getUser } from "../Services/services";
import { Link, useNavigate } from "react-router-dom";


function RegisterForm()
{
    const navigate = useNavigate();

    const[users,setUsers]=useState(
        {
            username: "",
            email:"",
            password: ""
        }
    );

    const handleData=(event)=>
    {
        const{name,value}=event.target;
        setUsers((prevData)=>
        (
            {
                ...prevData,[name]:value
            }
        )
        );

    }

    const verifyUsers = async (event) => {
        event.preventDefault();
        try {
            const response = await getUser();
            const userData = response.data;
            const foundUser = userData.find(user => user.username === users.username && user.password === users.password);
            if (foundUser) {
                alert("User Verified");
                navigate('/home');
            } else {
                alert("Please fill the login credentials again!!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error verifying user. Please try again later.");
        }
    }


    return(
        <div>
            <h2 style={{textAlign:'center', marginTop:'20px'}}>Please Login Here</h2>
            <Form onSubmit={verifyUsers} style={{margin:'20px'}}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="username" className="label-text-bold">Username:</Form.Label>
                    <Form.Control type="text" name="username" id="username" value={users.username} onChange={handleData} placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="password" className="label-text-bold">Password:</Form.Label>
                    <Form.Control type="password" name="password" id="password" value={users.password} onChange={handleData} placeholder="Enter Password" />
                </Form.Group>

                <Button variant="primary" type="submit">    
                    Login Here
                </Button>

                <h4>If new User Click on <Link to='/register'>Register</Link></h4>
            </Form>
            </div>
    )
}
export default RegisterForm;