import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { lazy, Suspense } from 'react';

import './styles/global.scss';
import AppLayout from './ui/AppLayout/AppLayout';
import ProtectedRoute from './ui/ProtectedRoute/ProtectedRoute';
import ScrollToTop from './ui/ScrollToTop/ScrollToTop';
import Loader from './ui/Loaders/Loader';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const SigninPage = lazy(() => import('./pages/SigninPage/SigninPage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage/CategoriesPage'));
const RecipeDatailsPage = lazy(() => import('./pages/RecipeDatailsPage/RecipeDatailsPage'));
const AddRecipePage = lazy(() => import('./pages/AddRecipePage/AddRecipePage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const MyRecipesPage = lazy(() => import('./pages/MyRecipesPage/MyRecipesPage'));

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
        <ScrollToTop />
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
            <Route path="categories/:categoryName" element={<CategoriesPage />} />
            <Route path="recipes/:recipeId" element={<RecipeDatailsPage />} />
            <Route path="add" element={<AddRecipePage />} />
            <Route path="my" element={<MyRecipesPage />} />
            <Route path="favorite" element={<FavoritesPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route
            path="/"
            element={
              <ProtectedRoute type="public">
                <Suspense fallback={<Loader type="suspense" />}>
                  <WelcomePage />
                </Suspense>
              </ProtectedRoute>
            }
          />

          <Route
            path="signin"
            element={
              <ProtectedRoute type="public">
                <Suspense fallback={<Loader type="suspense" />}>
                  <SigninPage />
                </Suspense>
              </ProtectedRoute>
            }
          />

          <Route
            path="register"
            element={
              <ProtectedRoute type="public">
                <Suspense fallback={<Loader type="suspense" />}>
                  <RegisterPage />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader type="suspense" />}>
                <PageNotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
