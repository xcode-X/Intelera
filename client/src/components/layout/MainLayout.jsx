import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import StickyCTA from './StickyCTA';
import ExitIntentPopup from '../lead/ExitIntentPopup';
import MousePattern from './MousePattern';

export default function MainLayout() {
  return (
    <>
      <MousePattern />
      <ScrollProgress />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
      <ExitIntentPopup />
    </>
  );
}
