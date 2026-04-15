import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/user/SignupPage';
import UserManagePage from './pages/user/UserManagePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/user-manage" element={<UserManagePage />} />
    </Routes>
  );
}
