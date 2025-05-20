import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
