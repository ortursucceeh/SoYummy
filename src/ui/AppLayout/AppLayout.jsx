import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';
import DecorBottom from '../DecorBottom/DecorBottom';
import Loader from '../Loaders/Loader';
import { Suspense } from 'react';

function AppLayout() {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<Loader type="suspense" />}>
          <Outlet />
          <DecorBottom />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
}

export default AppLayout;
