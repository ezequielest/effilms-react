import Landing from './components/landing/Landing';
import Video from './components/video/Video';
import ServicesSlide from './components/services-slide/ServicesSlide';
import './Home.scss';

import Counters from '../../shared/components/counters/Counters';
import BoxServices from './components/box-services/BoxServices';
import MonthPlan from '../../shared/components/month-plan/MonthPlan';
import Team from './components/team/Team';
import Testimonials from './components/testimonials/Testimonials';
import Us from './components/us/Us';
import Faqs from './components/faqs/Faqs';
import Clients from './components/clients/Clients';
import Callto from '../../shared/components/callto/Callto';
import { useEffect } from 'react';
import TresDBuilding from '../../shared/components/3d-building/3d-building';
function Home() {
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth', // or 'auto' for instant scroll
        });
      }
    }
  }, [location]);

  return (
    <>
      <div className="">
        <Landing />
        <Video />
        <ServicesSlide />
        <TresDBuilding />
        <Counters />
        <BoxServices />
        <MonthPlan />
        <div className="quiero-ver-todo text-center bg-gray-4">
          <a
            className="btn primary-btn"
            target="_blank"
            href="/servicios"
          >
            QUIERO VER TODOS LOS PLANES
          </a>
        </div>
        <Team />
        <Testimonials />
        <Callto />
        <Clients />
        <Us />
        <Faqs />
      </div>
      {/* Acá irán otros componentes como Hero, Servicios, etc. */}
    </>
  );
}

export default Home;
