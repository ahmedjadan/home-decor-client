import Footer from '@components/footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-width: 1480px;
  width: 90vw;
  margin: 0 auto;
`;
function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

export default Layout;
