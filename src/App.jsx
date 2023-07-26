import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout/AppLayout';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SigninPage from './pages/SigninPage/SigninPage';
import './styles/global.scss';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<Navigate replace to="home" />} />
          <Route path="home" element={<MainPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/" element={<WelcomePage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
