import React, { useEffect } from 'react';
import Header from '../../shared/components/header/Header';
import MonthPlan from '../../shared/components/month-plan/MonthPlan';
import Counter from '../../shared/components/counters/Counters';
import Callto from '../../shared/components/callto/Callto';
import Prices from './components/prices/Prices';
import Extras from './components/extras/Extras';
import Cancelations from './components/cancelations/Cancelations';
import LinkPlans from './components/linkplans/LinkPlans';
import HeroTitle from '../../shared/components/hero-title/HeroTitle';
import Plan6m from './components/plan6m/Plan6m';
import ServiceType from './components/service-type/ServiceType';
import ExplanetionDiscount from './components/explanetion-discount/ExplanetionDiscount';

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
        subtitleFirstline={'VALORES VIGENTES DESDE EL 1 JULIO DE 2026'}
        subtitleSecondLine={''}
      />
      <ServiceType />
      <LinkPlans/>
      <HeroTitle
        ancle={'individuals'}
        title={'INDIVIDUALES.'}
        description={'Elegí especificamente lo que necesitas de manera individual y a medida.'} />
      <Prices />
      <HeroTitle
        ancle={'monthly'}
        title={'PLAN FLEXIBLE.'}
        description={'Realiza varias producciones en el mismo mes y obtene un descuento adicional.'} />
      <MonthPlan />
      <HeroTitle
        ancle={'plan6m'}
        title={'PLAN 6M.'}
        description={'Contrato a 6 meses con un valor preferencial para los que apuestan a largo plazo.'} />
      <Plan6m  />
      {/* <Promotions /> */}
      <ExplanetionDiscount />
      <Extras />
      <Cancelations />
      <Counter />
      <Callto />
    </>
  );
};

export default Services;
