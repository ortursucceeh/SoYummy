import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import DecorBottom from '../DecorBottom/DecorBottom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loader from '../Loaders/Loader';

const AppLayout: React.FC = () => {
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
};

export default AppLayout;
