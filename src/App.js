// App.js

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Questions from './components/Questions';
import AdminDashboard from './components/AdminDashboard';
import NotFound from './components/NotFound';
import RegisterForm from './components/RegisterForm';
import AnswerForm from "./components/AnswerForm";
import MiniProjectInfo from "./components/MiniProjectInfo";
import AnswerDetails from "./components/AnswerDetail";
import AdminForm from "./components/AdminForm";
import UserDetails from "./components/UserDetails";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/mini-project-info" element={<MiniProjectInfo/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/questions" element={<Questions/>} />
        <Route path="/answer-details" element={<AnswerDetails />} />
        <Route path="/answer/:questionId" element={<AnswerForm/>} />
        <Route path="/admin-form" element ={<AdminForm/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/user-details" element={<UserDetails/>} />
        <Route path="/edit-user/:id" element={<EditUser/>} />
        <Route path="/add-user" element={<AddUser/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;