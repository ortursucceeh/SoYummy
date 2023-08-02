import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';

function AppLayout() {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default AppLayout;
