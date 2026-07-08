import React, { useEffect } from 'react';
import Header from '../../shared/components/header/Header';
import Counter from '../../shared/components/counters/Counters';
import Callto from '../../shared/components/callto/Callto';
import ContactButton from './components/contact-button';

export const Contact: React.FC = () => {
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
        title={'DATOS DE CONTACTO'}
        preTitle={'Información importante'}
        hasSubtitle={true}
        subtitleFirstline={'Aquí vas a poder encontrar toda la Información que necesitas.'}
        subtitleSecondLine={'Ante cualquier duda o consulta estamos a tu disposición'}
      />
      <ContactButton />
      <Counter />
      <Callto />
    </>
  );
};

export default Contact;
