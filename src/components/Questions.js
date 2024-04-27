import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import Header from './Header';
import AnswerForm from './AnswerForm'; // Import the AnswerForm component
import { Link } from 'react-router-dom';

function Questions({ match }) {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [showAnswerForm, setShowAnswerForm] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const questionsResponse = await axios.get('http://localhost:3030/questions');
      const questionsData = questionsResponse.data || [];

      const updatedQuestions = await Promise.all(questionsData.map(async (question) => {
        const answersResponse = await axios.get(`http://localhost:3030/answers?questionId=${question.id}`);
        const answersData = answersResponse.data || [];
        // Filter admin-approved answers
        const approvedAnswers = answersData.filter(answer => answer.approved);
        const updatedQuestion = { ...question, answers: approvedAnswers.map(answer => answer.answer) };
        return updatedQuestion;
      }));

      setQuestions(updatedQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const submitQuestion = async () => {
    try {
      await axios.post('http://localhost:3030/questions', {
        question: newQuestion
      });
      setNewQuestion('');
      fetchQuestions();
    } catch (error) {
      console.error('Error posting question:', error);
    }
  };

  return (
    <div>
      <Header />
      <div style={{ margin: '20px', textAlign: "center" }}>
        <h2>Ask a Question</h2>
        <textarea style={{ width: '60%' }}
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Enter your question"
        /><br />
        <Button onClick={submitQuestion}>Post Question</Button>
      </div>

      <div style={{ margin: '20px' }}>
        <h2>Questions Asked</h2>
        {questions.map((question) => (
          <Card key={question.id} style={{ marginBottom: '20px' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Card.Title>{question.question}</Card.Title>
                <Link to={`/answer/${question.id}`} style={{ color: 'white', textDecoration: 'none', border: '1px solid white', backgroundColor: 'teal', borderRadius: '10px', padding: '8px 30px' }}>Reply</Link>
              </div>
              <h6>Answers:</h6>
              <ul>
                {question.answers && question.answers.map((answer, index) => (
                  <li key={index}>{answer}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        ))}
      </div>

      {showAnswerForm && <AnswerForm questionId={selectedQuestionId} />}
    </div>
  );
}

export default Questions;
