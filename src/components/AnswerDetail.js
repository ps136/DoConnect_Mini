import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AnswerForm from './AnswerForm';
import Header from './Header';

function AnswerDetails() {
    const location = useLocation();
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        // Extract the query parameter from the location
        const searchParams = new URLSearchParams(location.search);
        const selectedQuestion = searchParams.get('q');
    
        console.log('Selected Question ID:', selectedQuestion); // Log the selected question ID
    
        // Fetch answers related to the selected question
        fetchAnswers(selectedQuestion);
    
        // Set the selected question
        setQuestion(selectedQuestion);
    }, [location.search]);
    

    const fetchAnswers = async (selectedQuestion) => {
    try {
        // Fetch all answers
        const response = await axios.get('http://localhost:3030/answers');
        const allAnswers = response.data || [];

        console.log('All Answers:', allAnswers); // Log all fetched answers

        // Filter answers based on the selected question ID
        const filteredAnswers = allAnswers.filter(answer => answer.questionId.toString() === selectedQuestion);

        console.log('Filtered Answers:', filteredAnswers); // Log the filtered answers

        // Set the filtered answers
        setAnswers(filteredAnswers);
    } catch (error) {
        console.error('Error fetching answers:', error);
    }
};

    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center', margin: '30px' }}>
                <h5>Question: {question}</h5>
                <h5>Answers:</h5>
                <ul>
                    {answers.map((answer, index) => (
                        <li key={index}>{answer.answer}</li>
                    ))}
                </ul>
            </div>
            <hr />
            <AnswerForm />
        </div>
    );
}

export default AnswerDetails;
