// AnswerForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // Import useParams hook

function AnswerForm() {
  const { questionId } = useParams(); // Get questionId from URL params
  const [newAnswer, setNewAnswer] = useState('');

  const submitAnswer = async () => {
    try {
      await axios.post('http://localhost:3030/answers', {
        questionId: questionId, // Use questionId obtained from URL params
        answer: newAnswer
      });
      setNewAnswer('');
      // You can also redirect back to the question detail page after posting the answer
    } catch (error) {
      console.error('Error posting answer:', error);
    }
  };

  return (
    <div style={{ margin: '20px', textAlign:"center"}}>
      <h2>Post Answer</h2>
      <textarea style={{width:'60%', height:'200px', margin:'20px'}}
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
        placeholder="Enter your answer here"
      /><br />
      <Button onClick={submitAnswer}>Post Answer</Button>
    </div>
  );
}

export default AnswerForm;
