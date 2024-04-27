import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../doconnect-favicon-color.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestedQuestions, setSuggestedQuestions] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const searchInputRef = useRef(null);

    useEffect(() => {
        // Fetch questions for suggestion
        fetchSuggestedQuestions();
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const fetchSuggestedQuestions = async () => {
        try {
            const response = await axios.get('http://localhost:3030/questions');
            setSuggestedQuestions(response.data || []);
        } catch (error) {
            console.error('Error fetching suggested questions:', error);
        }
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Filter suggested questions based on search query
        const filteredQuestions = suggestedQuestions.filter(question => {
            return question.question.toLowerCase().includes(query.toLowerCase());
        });
        // Update the state with filtered questions
        setFilteredQuestions(filteredQuestions);
        setShowDropdown(true);
    };

    const handleQuestionSelection = (question) => {
        setSearchQuery(question);
        setFilteredQuestions([]); // Clear dropdown
        setShowDropdown(false);
    };

    const handleSearchSubmit = () => {
        // Navigate to the AnswerDetails component with the selected question as query parameter
        navigate(`/answer-details?q=${searchQuery}`);
    };

    const handleLogout = async () => {
        try {
            // Perform logout logic here
            // For example, clear local storage or delete authentication token
            localStorage.removeItem('isLoggedIn');

            // Redirect to the login page after logout
            alert("Logout successfully!!");
            navigate("/");

        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging out. Please try again.');
        }
    };

    const handleClickOutside = (event) => {
        if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    return (
        <Navbar bg="dark" data-bs-theme="dark" style={{marginTop:'-8px', padding:'0 0'}}>
            <img src={logo} alt="Logo" height="70" style={{ marginLeft: '40px' }}  />
            <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Navbar.Brand as={ Link } to="/mini-project-info" style={{ fontSize: 'large' }}>DoConnect</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={ Link } to="/home">Home</Nav.Link>
                        <Nav.Link as={ Link } to="/questions">QuestionDetail</Nav.Link>
                        <Nav.Link as={ Link } to="/admin-form" style={{fontWeight:'bold'}}> Admin?</Nav.Link>
                    </Nav>
                </div>
                <div>
                    <Nav>
                        <div style={{ position: 'relative' }}>
                            <input
                                ref={searchInputRef}
                                style={{
                                    padding: '5px 5px',
                                    width: '200px',
                                    backgroundColor: '#333333', // Dark background color
                                    color: 'snow', // Light text color
                                }}
                                type="text"
                                className="form-control me-2"
                                placeholder="Search any question"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            {showDropdown && filteredQuestions.length > 0 && (
                                <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 100, backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', maxHeight: '150px', overflowY: 'auto' }}>
                                    {filteredQuestions.map(question => (
                                        <div key={question.id} style={{ padding: '5px', cursor: 'pointer' }} onClick={() => handleQuestionSelection(question.question)}>
                                            {question.question}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button className="btn btn-outline-success" style={{ padding: '4px 16px', marginLeft: '5px' }} type="button" onClick={handleSearchSubmit}>
                            <FontAwesomeIcon icon={faSearch} /> {/*search icon*/}
                        </button>
                    </Nav>
                </div>
                <div>
                    <Nav.Link className="ml-auto">
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </Nav.Link>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
