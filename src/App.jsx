import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import './styles/global.scss';
import AppLayout from './ui/AppLayout/AppLayout';

import MainPage from './pages/MainPage/MainPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SigninPage from './pages/SigninPage/SigninPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ProtectedRoute from './ui/ProtectedRoute/ProtectedRoute';
import SearchPage from './pages/SearchPage/SearchPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute type="private">
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route element={<Navigate replace to="main" />} />
            <Route path="main" element={<MainPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="categories/:categoryName" element={<MainPage />} />
            <Route path="add" element={<MainPage />} />
            <Route path="my" element={<MainPage />} />
            <Route path="favorite" element={<MainPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route
            path="/"
            element={
              <ProtectedRoute type="public">
                <WelcomePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="signin"
            element={
              <ProtectedRoute type="public">
                <SigninPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="register"
            element={
              <ProtectedRoute type="public">
                <RegisterPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
