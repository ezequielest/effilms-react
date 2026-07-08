import React, { useEffect } from 'react';
import Header from '../../shared/components/header/Header';
import MonthPlan from '../../shared/components/month-plan/MonthPlan';
import Promotions from './components/promotions/Promotions';
import Counter from '../../shared/components/counters/Counters';
import Callto from '../../shared/components/callto/Callto';
import Prices from './components/prices/Prices';
import Extras from './components/extras/Extras';
import Cancelations from './components/cancelations/Cancelations';

export const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // or 'auto' for instant scroll
    });
  }, []);

  return (
    <>
      <Header
        title={'ALCANZAR TUS OBJETIVOS'}
        preTitle={'A continuación te presentamos nuestras propuestas para que puedas'}
        hasSubtitle={true}
        subtitleFirstline={'VALORES VIGENTES DESDE EL 1 ABRIL DE 2026'}
        subtitleSecondLine={''}
      />
      <MonthPlan />
      <Promotions />
      <Prices />
      <Extras />
      <Cancelations />
      <Counter />
      <Callto />
    </>
  );
};

export default Services;
