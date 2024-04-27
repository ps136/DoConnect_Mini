import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import Header from './Header';
import AnswerForm from './AnswerForm'; // Import the AnswerForm component
import { Link } from 'react-router-dom';

function AdminQuestions({ match }) {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [showAnswerForm, setShowAnswerForm] = useState(false);
  const [editedAnswer, setEditedAnswer] = useState('');
  const [editedAnswerId, setEditedAnswerId] = useState(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null); // Declaring selectedQuestionId

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
        const updatedQuestion = { ...question, answers: answersData };
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

  const deleteAnswer = async (questionId, answerId) => {
    try {
      await axios.delete(`http://localhost:3030/answers/${answerId}`);
      // Update the questions array to reflect the deleted answer
      setQuestions(prevQuestions =>
        prevQuestions.map(question =>
          question.id === questionId
            ? {
                ...question,
                answers: question.answers.filter(answer => answer.id !== answerId)
              }
            : question
        )
      );
    } catch (error) {
      console.error('Error deleting answer:', error);
    }
  };

  const handleEditAnswer = async (questionId, answerId) => {
    try {
      // Fetch the existing answer
      const response = await axios.get(`http://localhost:3030/answers/${answerId}`);
      const existingAnswer = response.data;
  
      // Update the answer object with the new content
      const updatedAnswer = {
        ...existingAnswer,
        answer: editedAnswer,
        questionId: questionId, // Include the questionId
        approved: false // Since it's an edited answer, set approved to false
      };
  
      // Send the updated answer to the server
      await axios.put(`http://localhost:3030/answers/${answerId}`, updatedAnswer);
  
      // Update the state to reflect the edited answer
      setQuestions(prevQuestions =>
        prevQuestions.map(question =>
          question.id === questionId
            ? {
                ...question,
                answers: question.answers.map(answer =>
                  answer.id === answerId ? updatedAnswer : answer // Only update the edited answer
                )
              }
            : question
        )
      );
      setEditedAnswer(''); // Reset edited answer state
      setEditedAnswerId(null); // Reset edited answer ID state
    } catch (error) {
      console.error('Error editing answer:', error);
    }
  };
  

  const approveAnswer = async (answerId) => {
    try {
      const response = await axios.get(`http://localhost:3030/answers/${answerId}`);
      const existingAnswer = response.data;
      const updatedAnswer = { ...existingAnswer, approved: true };
      await axios.put(`http://localhost:3030/answers/${answerId}`, updatedAnswer);
      fetchQuestions();
    } catch (error) {
      console.error('Error approving answer:', error);
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
                {question.answers && question.answers.map((answer) => (
                  <div key={answer.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    {editedAnswerId === answer.id ? (
                      <>
                        <input type="text" value={editedAnswer} onChange={(e) => setEditedAnswer(e.target.value)} />
                        <Button variant="primary" onClick={() => handleEditAnswer(question.id, answer.id)}>Save</Button>
                      </>
                    ) : (
                      <>
                        <li>{answer.answer} {answer.approved ? <span style={{ color: 'darkgreen', marginLeft: '5px', fontWeight:'bold' }}>admin-approved!!</span> : ''}</li>
                        <Button variant="warning" onClick={() => setEditedAnswerId(answer.id)}>Edit</Button>
                      </>
                    )}
                    <Button variant="danger" onClick={() => deleteAnswer(question.id, answer.id)}>Delete</Button>
                    {!answer.approved && <Button variant="success" onClick={() => approveAnswer(answer.id)}>Approve</Button>}
                  </div>
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

export default AdminQuestions;
