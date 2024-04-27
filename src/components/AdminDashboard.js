import React from 'react';
import AdminQuestions from './AdminQuestions';
import { Link } from 'react-router-dom';


const AdminDashboard=()=>{

    return(
        <div>
            <div style={{textAlign:'center', backgroundColor:'#212529', padding:'10px', color:'lightgray', marginBottom:'5px'}}>
                <h2 >
                    Admin Dashboard
                </h2>
                <Link to={`/user-details`} style={{ color: 'white', textDecoration: 'none', border: '1px solid white', backgroundColor:'teal', borderRadius:'10px', padding:'5px 5px' }}>Users Details</Link>
            </div>
            <AdminQuestions />
        </div>
    )
}

export default AdminDashboard;