import './Counter.scss';

function Counter() {
  const countArray = [
    {
      title: 'Proyectos entregados',
      number: 548,
    },
    {
      title: 'Clientes felices',
      number: 32,
    },
    {
      title: 'Horas editando',
      number: 2689,
    },
    {
      title: 'Tazas de cafe',
      number: 1239,
    },
  ];

  return (
    <>
      <section className="counter bg-gray-4">
        <div className="container">
          <div className="counter__content">
            <div className="row">
              {countArray.map((el, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                  <div className="counter__item">
                    <div className="counter__item__number">
                      <h2 className="count">{el.number}</h2>
                    </div>
                    <div className="counter__item__text">
                      <h5>{el.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Counter;
