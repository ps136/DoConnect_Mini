import React from 'react';
import Header from './Header';
import backgroundImage from '../background2.jpg'; // Import the background image

const MiniProjectInfo = ()=>{
    // Define styles for the component
    const styles = {
        container: {
            margin: '0',
            backgroundImage: `url(${backgroundImage})`, // Set background image
            backgroundSize: 'cover', // Cover the entire container
            backgroundRepeat: 'no-repeat', // Do not repeat the image
            padding: '20px', // Add padding to improve readability
            color: 'black', // Set text color to white
        },
        heading: {
            textAlign: 'center',
            padding: '15px',
            textDecoration: 'underline',
            marginBottom: '30px',
            backgroundColor: ' lightgrey rgba(0, 0, 0, 0.5)', // Add background color with transparency
        }
    };

    return (
    <>
        <Header/>
        <div className='mini-project-1' style={styles.container}>
            <h2 style={styles.heading}>Mini-Project(FrontEnd Programming)</h2>
            <h4> DoConnect : Connecting Curiosity: Your Gateway to Shared Knowledge</h4>
            <p>DoConnect is a popular Question and Answer application in which technical questions are asked and
            answered. <br/><br/>There are 2 users in this application:<br/>1. User<br/>2. Admin<br/>
            </p><hr/>
            <h5>## User Stories:</h5>
            <p>
                1. As a User, I should be able to register, login and logout from the application.<br/>
                2. As a User, I should be able to ask any kind of questions based on any topic.<br/>
                3. As a User, I should be able to search the question based on any string written in the search box.<br/>
                4. As a User, I should be able to answer any question asked.<br/>
                5. As a User, I should be able to answer more than one question and the same question more than once.<br/>
                6. As a User, I should be able to chat with other users.<br/>
                7. As a User, I should be able to like the answers and comment on the answers provided.<br/>
            </p><hr/>
            <h5>## Admin Stories:</h5>
            <p>
                1. As an Admin, I should be able to register, login and logout from the application.<br/>
                2. As an Admin, I should be able to perform CRUD operations on Users.<br/>
                3. As an Admin, I should be able to perform CRUD operations on Questions.<br/>
                4. As an Admin, I should be able to get mail as soon as any new question is asked or any question is
                answered.<br/>
                5. As an Admin, I should be able to approve the question and answer. Any question or answer will be
                visible on the DoConnect platform only if it is approved by the admin.<br/>
                6. As an Admin, I should be able to delete the inappropriate or irrelevant Questions or Answers.<br/>
                7. As an Admin, I should be able to close the discussion thread/post for the question and update the
                status as resolved.<br/>
            </p><hr/>
            <h5>## Instructions:</h5>
            <p>
                1. Create a SPA for the problem statement.<br/>
                2. Use appropriate framework for better UI.<br/>
                3. Application must be responsive.<br/>
                4. Handle session using local storage.<br/>
                5. Use proper component structure.<br/>
                6. Include client side validation.<br/>
                7. Use json to store the data and deploy using json server.<br/>
            </p><hr/>
        </div>
    </>
    )
}
export default MiniProjectInfo;