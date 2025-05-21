import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/auth/ProtectedRoute';
import RedirectIfAuthentication from './components/auth/RedirectIfAuthentication';
import NotFound from './components/home/NotFound';
import DetailUser from './components/users/DetailUser';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectIfAuthentication>
              <LoginPage />
            </RedirectIfAuthentication>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectIfAuthentication>
              <RegisterPage />
            </RedirectIfAuthentication>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:id"
          element={
            <ProtectedRoute>
              <DetailUser />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
