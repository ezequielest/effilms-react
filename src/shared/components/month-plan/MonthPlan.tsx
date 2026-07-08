
import { useEffect, useState } from 'react';
import './MonthPlan.scss'
import { plans } from '../../../data/plans';
import CardPlan from './card-plan/CardPlan';
import type { Iplans } from '../../../core/models/Iplans';
import { servicesArray } from '../../../data/services';
import { ADITIONALS } from '../../../core/models/Aditionals.enum';
import { ServiceGroup } from '../../../core/models/ServiceGroup.enum';

function MonthPlan() {
    const [cantMonthSelected, setCantMonthSelected] = useState(2);
    const [percentDiscount, setPercentDiscount] = useState(0);

    const [plansState, setPlansState] = useState<Iplans[]>(plans);
    //const [videoUrl, setVideoUrl] = useState('');

    const thereIsAvailablePlaces: boolean = true;
    
    const prodsConfig = {
        minProds: 2,
        maxProds: 4
    }

    //llamar a una funcion al principio para que busque lso servicios base de cada plan y calcule el descuento
    useEffect(() => {
      updateFinalPrice();
    }, [cantMonthSelected]); // [] = solo al montar

    function updateFinalPrice() {
      const updatedPlans = plans.map(plan => {
      
      const service = servicesArray.find(service => 
        service.isBaseMontly && service.group === plan.type
      );
      

      if (service) {

        if (service.group === ServiceGroup.INITIAL){
          const price = service.prices.find(el => el.isBasePrise);

          if (price && service.discountMontly) {
            

            const aditionalBroker = service.aditionals.find(el => {
              return el.type === ADITIONALS.BROKER
            })

            let aditionalPrice = 0;
            if (aditionalBroker) {
              if (aditionalBroker.type === ADITIONALS.BROKER) {
                aditionalPrice = aditionalBroker.price;
              }
            }

            const totalValuePerProduction = price.value + aditionalPrice;

            //le agrego 5% al descuento por cada produ que se sume, 2 = default, 3 default + 5%, 4 default + 10%
            const porcentMonthly = ((cantMonthSelected - 2) * 5) + service.discountMontly; 

            setPercentDiscount(porcentMonthly);

            const discount = (porcentMonthly * (totalValuePerProduction * cantMonthSelected)) / 100;

            return {
              ...plan,
              totalPercentDiscount: porcentMonthly,
              value: (totalValuePerProduction * cantMonthSelected) - discount,
              saveCash: discount,
            };
          }
        } else if (service.group === ServiceGroup.STANDARD) {
          const price = service.prices.find(el => el.isBasePrise);

          if (price && service.discountMontly) {

            let aditionalPrice = 0;
            service.aditionals.forEach(el => {
                if(el.type !== ADITIONALS.CONTENT) {
                  aditionalPrice += el.price;
                }
            });

            const totalValuePerProduction = price.value + aditionalPrice;

            //le agrego 5% al descuento por cada produ que se sume, 2 = default, 3 default + 5%, 4 default + 10%
            const porcentMonthly = ((cantMonthSelected - 2) * 5) + service.discountMontly;
            
            setPercentDiscount(porcentMonthly);

            const discount = (porcentMonthly * (totalValuePerProduction * cantMonthSelected)) / 100;

            return {
              ...plan,
              totalPercentDiscount: porcentMonthly,
              value: ((totalValuePerProduction) * cantMonthSelected) - discount,
              saveCash: discount,
            };
          }
        } else if (service.group === ServiceGroup.PREMIUM) {
            const price = service.prices.find(el => el.isBasePrise);

            if (price && service.discountMontly) {
              
              let aditionalPrice = 0;
              service.aditionals.forEach(el => {
                if(el.type !== ADITIONALS.CONTENT) {
                  aditionalPrice += el.price;
                }
              });

            const totalValuePerProduction = price.value + aditionalPrice;

            //le agrego 5% al descuento por cada produ que se sume, 2 = default, 3 default + 5%, 4 default + 10%
            const porcentMonthly = ((cantMonthSelected - 2) * 5) + service.discountMontly;

            setPercentDiscount(porcentMonthly);

            const discount = (porcentMonthly * (totalValuePerProduction * cantMonthSelected)) / 100;

              return {
                ...plan,
                totalPercentDiscount: porcentMonthly,
                value: ((totalValuePerProduction) * cantMonthSelected) - discount,
                saveCash: discount,
              };
            }
          } 
        }

        return plan; // si no se encuentra nada, devuelve el plan sin cambios
      });

      setPlansState(updatedPlans);
    }

    function incressProd() {
      if (cantMonthSelected < prodsConfig.maxProds) {
        setCantMonthSelected(prev => prev + 1);
      }
    }

    function decreaseProd() {
      if (cantMonthSelected > prodsConfig.minProds) {
        setCantMonthSelected(prev => prev - 1);
      }
    }

  return (
    <>
    <section id="plans" className="monthly spad table-price bg-gray-4">
        <div className="monthly__header">
            <h2 className="title">PLANES MENSUALES <span className="line">|</span> { !thereIsAvailablePlaces ? <span className="tag sold-out">AGOTADOS</span> : <span className="tag available">DISPONIBLES</span> }</h2>
        </div>
        <div className="cant_prods buttons-container">
            <div>Seleccioná la cantidad de producciones mensuales que necesitas</div>
            <div className="cant-prod">
              <button className="btn btn-secondary" onClick={ () => { decreaseProd() }}>-</button>
              <div className='number-production'>
              {cantMonthSelected}
              </div>
              <button className="btn btn-secondary" onClick={ () => { incressProd() }}>+
              <div className='leyend'>
                {cantMonthSelected === prodsConfig.minProds && <span className='min-text'> MÍNIMO MENSUAL</span>}
                {cantMonthSelected === prodsConfig.maxProds && <span className='max-text'> MÁXIMO MENSUAL</span>}
              </div>
              </button>
            </div>
        </div>
      <div className="monthly-card">

      {plansState.map((plan: Iplans, index) => (
          <CardPlan index={index} key={index} plan={plan} cantMonthSelected={cantMonthSelected} percentDiscount={percentDiscount}/>
      ))}
      
    </div>
    <div className='leyend-container'>
      <h2 className='title benefit'>BENEFICIOS</h2>
      <ul className='leyend'>
          <li>MENOR COSTO</li>
          <li>PRIORIDAD DE RODAJES</li>
      </ul>
      
      <h2 className='title primary'>CONDICIONES</h2>
      <ul className='leyend'>
        <li><strong>CONTRATO MÍNIMO DE 3 MESES</strong></li>
        <li>ABONO FIJO MENSUAL</li>
        <li>ABONOS DEL 1 AL 10 DE CADA MES</li>
        <li>LAS PRODUCCIONES NO FILMADAS PUEDEN SER REALIZADAS EL MES POSTERIOR,<br></br> LUEGO DE ESE PLAZO YA NO SON REEMBOLSABLES</li>
      </ul>
    </div>

    <div className='want-hire'>
        <a className="btn primary-btn" target="_blank" href="https://api.whatsapp.com/send?phone=542236688588&text=Hola, me gustaría contratar un plan mensual!">QUIERO CONTRATAR</a>
    </div>
    </section>
    </>
  );

}

export default MonthPlan;